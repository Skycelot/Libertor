Ext.define("Libertor.store.HistoryTorrents", {
    extend: "Ext.data.Store",
    model: "Libertor.model.HistoryTorrent",
    data: [
        {
            id: 1,
            name: "V for Vendetta",
            size: "9 Gb",
            startDownloadingDate: "15.05.2015 15:39:42",
            startSeedingDate: "17.05.2015 09:39:42",
            removedDate: "23.05.2015 22:39:42",
            reason: "removed by user",
            downloaded: "9 Gb",
            seeded: "6 Gb"
        },
        {
            id: 2,
            name: "Jennifer Lopez - discography",
            size: "5 Gb",
            startDownloadingDate: "18.05.2015 23:39:42",
            startSeedingDate: "19.05.2015 14:39:42",
            removedDate: "22.05.2015 21:39:42",
            reason: "content was removed",
            downloaded: "5 Gb",
            seeded: "12 Gb"
        },
        {
            id: 3,
            name: "Adam J. Jackson. 10 Secrets of Abundant Love",
            size: "19 Mb",
            startDownloadingDate: "20.05.2015 18:39:42",
            startSeedingDate: "20.05.2015 23:39:42",
            removedDate: "21.05.2015 19:39:42",
            reason: "content was removed",
            downloaded: "19 Mb",
            seeded: "150 Mb"
        }
    ]
});