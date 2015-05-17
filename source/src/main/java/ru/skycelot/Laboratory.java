package ru.skycelot;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.SortedSet;
import java.util.TreeSet;
import javax.xml.bind.DatatypeConverter;
import ru.skycelot.bencode.Bencode;
import ru.skycelot.ip.Ipv4Address;

/**
 *
 */
public class Laboratory {
    
    public static void main(String[] args) {
        try {
            Path torrentFile = Paths.get("/home/mavakov/temp/torrent.torrent");
            byte[] torrentFileContent = Files.readAllBytes(torrentFile);
            Object decoded = Bencode.decode(new ByteArrayInputStream(torrentFileContent));
            
            byte[] info = extractInfoSection(new ByteArrayInputStream(torrentFileContent));
            Object decodedInfo = Bencode.decode(new ByteArrayInputStream(info));
            MessageDigest digest = MessageDigest.getInstance("SHA1");
            byte[] infoSha1 = digest.digest(info);
            String infoSha1Hex = DatatypeConverter.printHexBinary(infoSha1);
            
            String peers = "5f4950388aaf1fcfb6059ea46dbf05dabcb28044317ee71d53ac1cf17a1bbc10d55e629bb03e4c2ffa6c4e553eac301005e44ea6cb7dd59f28b81ae16dae7057c5c3058dc5637d6bb0c1bb186df0bca2f577c8d5bc7be66a39f3b2ce1833db05550fe2ea7ff82e35b02731074f86530ff6c5";
            byte[] rawPeers = DatatypeConverter.parseHexBinary(peers);
            int index = 0;
            SortedSet<Ipv4Address> addresses = new TreeSet<>();
            Map<Ipv4Address, String> fullAddresses = new HashMap<>();
            while (index < rawPeers.length) {
                Ipv4Address ip = new Ipv4Address(Arrays.copyOfRange(rawPeers, index, index += 4));
                int port = 0xff & rawPeers[index++];
                port += (0xff & rawPeers[index++]) << 8;
                addresses.add(ip);
                fullAddresses.put(ip, ip + ":" + port);
                
            }
            for (Ipv4Address address : addresses) {
                System.out.println(fullAddresses.get(address));
            }
            int i = 0;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
    private static byte[] extractInfoSection(InputStream torrentFileContent) {
        ByteArrayOutputStream result = new ByteArrayOutputStream();
        int symbol;
        try {
            while ((symbol = torrentFileContent.read()) != -1) {
                if (symbol == 'i') {
                    if ((symbol = torrentFileContent.read()) == 'n') {
                        if ((symbol = torrentFileContent.read()) == 'f') {
                            if ((symbol = torrentFileContent.read()) == 'o') {
                                if ((symbol = torrentFileContent.read()) == 'd') {
                                    result.write(symbol);
                                    int innerElements = 0;
                                    do {
                                        symbol = torrentFileContent.read();
                                        if (symbol == 'd' || symbol == 'l') {
                                            innerElements++;
                                            result.write(symbol);
                                        } else if (symbol == 'i') {
                                            result.write(symbol);
                                            do {
                                                symbol = torrentFileContent.read();
                                                result.write(symbol);
                                            } while (symbol != 'e');
                                        } else if (symbol == '0' || symbol == '1' || symbol == '2' || symbol == '3'
                                                || symbol == '4' || symbol == '5' || symbol == '6' || symbol == '7'
                                                || symbol == '8' || symbol == '9') {
                                            ByteArrayOutputStream rawStringLength = new ByteArrayOutputStream();
                                            do {
                                                rawStringLength.write(symbol);
                                                result.write(symbol);
                                                symbol = torrentFileContent.read();
                                            } while (symbol != ':');
                                            result.write(symbol);
                                            int stringLength = Integer.valueOf(new String(rawStringLength.toByteArray()));
                                            for (int i = 0; i < stringLength; i++) {
                                                result.write(torrentFileContent.read());
                                            }
                                        } else if (symbol == 'e') {
                                            result.write(symbol);
                                            if (innerElements > 0) {
                                                innerElements--;
                                            } else {
                                                break;
                                            }
                                        }
                                    } while (true);
                                }
                            }
                        }
                    }
                }
            }
            return result.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
