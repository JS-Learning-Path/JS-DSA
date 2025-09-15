function countUploadsAndDownloads(logs) {
    const map = new Map();
    for (let log of logs) {
        if (!map.has(log.user)) {
            map.set(log.user, { upload: 0, download: 0 })
        }
        map.get(log.user)[log.action]++
    }
    return Object.fromEntries(map);
}
console.log(countUploadsAndDownloads([
    { user: "Ivan", action: "upload" },
    { user: "Maria", action: "upload" },
    { user: "Ivan", action: "download" },
    { user: "Ivan", action: "upload" },
    { user: "Maria", action: "download" }
]));