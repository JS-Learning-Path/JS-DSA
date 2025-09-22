class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }
    set(name, phone) {
        this.contacts.set(name, phone)
    }
    get(name) {
        return this.contacts.get(name) || null;
    }
    getAll() {
        return Object.fromEntries(this.contacts)
    }
}
const phoneBook = new PhoneBook()
phoneBook.set("Ivan", "12345");
phoneBook.set("Petar", "67890");
// console.log(phoneBook.get("Ivan")); // Output: "12345"
console.log(phoneBook.getAll())