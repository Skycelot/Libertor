package ru.skycelot.ip;

/**
 *
 */
public class Ipv4Address implements Comparable<Ipv4Address> {

    private int first;
    private int second;
    private int third;
    private int forth;

    public Ipv4Address(byte[] rawAddress) {
        first = 0xff & rawAddress[0];
        second = 0xff & rawAddress[1];
        third = 0xff & rawAddress[2];
        forth = 0xff & rawAddress[3];
    }

    @Override
    public String toString() {
        StringBuilder result = new StringBuilder();
        result.append(String.format("%3d", first));
        result.append('.');
        result.append(String.format("%3d", second));
        result.append('.');
        result.append(String.format("%3d", third));
        result.append('.');
        result.append(String.format("%3d", forth));
        return result.toString();
    }

    @Override
    public int compareTo(Ipv4Address o) {
        int comparison;
        if (o != null) {
            comparison = first - o.first;
            if (comparison == 0) {
                comparison = second - o.second;
                if (comparison == 0) {
                    comparison = third - o.third;
                    if (comparison == 0) {
                        comparison = forth - o.forth;
                    }
                }
            }
        } else {
            comparison = -1;
        }
        return comparison;
    }
}
