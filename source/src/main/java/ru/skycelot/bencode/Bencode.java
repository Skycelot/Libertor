package ru.skycelot.bencode;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 *
 */
public class Bencode {

    public static Object decode(InputStream is) throws IOException {
        if (!is.markSupported()) {
            throw new IOException("is.markSupported should be true");
        }
        Object result = parse(is);
        return result;
    }

    private static Object parse(InputStream is) throws IOException {
        is.mark(0);
        int readChar = is.read();
        switch (readChar) {
            case 'i':
                return parseInteger(is);
            case 'l':
                return parseList(is);
            case 'd':
                return parseDictionary(is);
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                is.reset();
                return parseByteString(is);
            default:
                throw new IOException("Problem parsing bencoded file");
        }
    }

    private static Long parseInteger(InputStream is) throws IOException {
        int readChar = is.read();
        StringBuilder buff = new StringBuilder();
        do {
            if (readChar < 0) {
                throw new IOException("Unexpected EOF found");
            }
            buff.append((char) readChar);
            readChar = is.read();
        } while (readChar != 'e');
        return Long.parseLong(buff.toString());
    }

    private static List parseList(InputStream is) throws IOException {
        List list = new LinkedList();
        is.mark(0);
        int readChar = is.read();
        while (readChar != 'e') {
            if (readChar < 0) {
                throw new IOException("Unexpected EOF found");
            }
            is.reset();
            list.add(parse(is));
            is.mark(0);
            readChar = is.read();
        }
        return list;
    }

    private static Map<String, Object> parseDictionary(InputStream is) throws IOException {
        Map<String, Object> map = new HashMap<>();
        is.mark(0);
        int readChar = is.read();
        while (readChar != 'e') {
            if (readChar < 0) {
                throw new IOException("Unexpected EOF found");
            }
            is.reset();
            map.put(new String(parseByteString(is)), parse(is));
            is.mark(0);
            readChar = is.read();
        }
        return map;
    }

    private static byte[] parseByteString(InputStream is) throws IOException {
        int readChar = is.read();
        StringBuilder buff = new StringBuilder();
        do {
            if (readChar < 0) {
                throw new IOException("Unexpected EOF found");
            }
            buff.append((char) readChar);
            readChar = is.read();
        } while (readChar != ':');
        Integer length = Integer.parseInt(buff.toString());
        byte[] byteString = new byte[length];
        for (int i = 0; i < byteString.length; i++) {
            byteString[i] = (byte) is.read();
        }
        return byteString;
    }
}
