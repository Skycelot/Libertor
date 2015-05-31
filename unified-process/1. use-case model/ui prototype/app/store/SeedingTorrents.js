Ext.define("Libertor.store.SeedingTorrents", {
    extend: "Ext.data.Store",
    model: "Libertor.model.SeedingTorrent",
    data: [
        {
            id: 1,
            name: "Divergent",
            size: "13 Gb",
            downloaded: "13 Gb",
            uploaded: "17 Gb",
            speed: "0 kb/s",
            startDownloadingDate: "22.05.2015 15:39:42",
            startSeedingDate: "24.05.2015 02:12:57"
        },
        {
            id: 2,
            name: "Ariana Grande - discography",
            size: "4 Gb",
            downloaded: "3 Gb",
            uploaded: "2 Gb",
            speed: "0 kb/s",
            startDownloadingDate: "22.05.2015 21:27:37",
            startSeedingDate: "23.05.2015 11:39:46"
        },
        {
            id: 3,
            name: "David Allen. Getting things done",
            size: "27 Mb",
            downloaded: "27 Mb",
            uploaded: "130 Mb",
            speed: "0 kb/s",
            startDownloadingDate: "18.05.2015 14:06:37",
            startSeedingDate: "18.05.2015 22:38:42"
        }
    ]
});