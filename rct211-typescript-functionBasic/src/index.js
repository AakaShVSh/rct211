var user1 = {
    type: "user",
    name: "pablo",
    age: 23,
    occupation: "hero for fun"
};
var user2 = {
    type: "admin",
    name: "pablo",
    age: 23,
    role: "hero"
};
function getUserType(obj) {
    return obj.type;
}
var whoIsThere = function (obj) {
    return obj.type;
};
console.log(getUserType(user1));
console.log(getUserType(user2));
console.log(whoIsThere(user1));
console.log(whoIsThere(user2));
