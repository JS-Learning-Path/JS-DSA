function groupBySkills(skills) {
    const map = new Map();
    for (let person of skills) {
        for (let skill of person.skills) {
            if (!map.has(skill)) {
                map.set(skill, [])
            }
            map.get(skill).push(person.name)
        }
    }
    return Object.fromEntries(map);
}
console.log(groupBySkills([{ name: "Alice", skills: ["JS", "Python"] },
{ name: "Bob", skills: ["Python", "C++"] },
{ name: "Carol", skills: ["JS"] }
]));