function countLogs(logs) {
    const map = new Map();
    for (let log of logs) {
        if (!map.has(log.user)) {
            map.set(log.user, { login: 0, logout: 0 })
        }
        map.get(log.user)[log.action]++;
    }
    return map;
}
console.log(countLogs([
    { user: "Alice", action: "login", time: "10:00" },
    { user: "Bob", action: "login", time: "10:05" },
    { user: "Alice", action: "logout", time: "10:30" },
    { user: "Alice", action: "login", time: "11:00" },
    { user: "Bob", action: "logout", time: "11:15" }
]));
