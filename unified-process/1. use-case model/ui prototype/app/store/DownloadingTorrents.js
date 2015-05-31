Ext.define("Libertor.store.DownloadingTorrents", {
    extend: "Ext.data.Store",
    model: "Libertor.model.DownloadingTorrent",
    data: [
        {
            id: 1,
            number: 1,
            name: "Tomorrowland",
            size: "12 Gb",
            progress: "10%",
            speed: "0 kb/s",
            eta: "-",
            additionDate: "22.05.2015 10:38:47"
        },
        {
            id: 2,
            number: 2,
            name: "Britney Spears - discography",
            size: "6 Gb",
            progress: "23%",
            speed: "0 kb/s",
            eta: "-",
            additionDate: "24.05.2015 22:00:30"
        },
        {
            id: 3,
            number: 3,
            name: "Meg Jay. The Defining Decade",
            size: "30 Mb",
            progress: "69%",
            speed: "Queued",
            eta: "-",
            additionDate: "25.05.2015 15:26:02"
        }
    ]
});