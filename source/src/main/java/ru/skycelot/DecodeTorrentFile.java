package ru.skycelot;

import java.io.ByteArrayInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import ru.skycelot.bencode.Bencode;

/**
 *
 */
public class DecodeTorrentFile {
    
    public static void main(String[] args) {
        try {
            Path torrentFile = Paths.get("/home/mavakov/temp/torrent.torrent");
            byte[] torrentFileContent = Files.readAllBytes(torrentFile);
            Object decoded = Bencode.decode(new ByteArrayInputStream(torrentFileContent));
            int i = 0;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
