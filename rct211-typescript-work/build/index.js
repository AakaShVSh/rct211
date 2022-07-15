//2nd
const user1 = {
    firstname: "xyz",
    lastname: null,
};
const user2 = {
    firstname: "pika",
    lastname: "dika",
};
const printName = (obj) => {
    if (obj.lastname != null) {
        return obj.firstname + " " + obj.lastname;
    }
    ;
    return obj.firstname;
};
console.log(printName(user1));
console.log(printName(user2));
//5th
const personDetails = {
    Prefix: null,
    phones: ["1234567890"],
    addresses: ["lili rood"],
    email: null,
    firstname: "pika",
    lastname: "dika",
    middlename: null,
};
let alldetail = [];
const PhoneBook = (obj) => {
    alldetail.push(obj);
};
PhoneBook(personDetails);
console.log(alldetail);
//# sourceMappingURL=index.js.map