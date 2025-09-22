function groupPeopleByFirstLetter(people) {
    const map = new Map();
    for (let person of people) {
        if (!map.has(person.name[0])) {
            map.set(person.name[0], [])
        }
        map.get(person.name[0]).push(person.name)
    }
    return Object.fromEntries(map)
}
console.log(groupPeopleByFirstLetter([{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Alex", age: 28 }
]));