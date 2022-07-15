interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

const user1:User = {
    type:"user",
    name:"pablo",
    age:23,
    occupation:"hero for fun",
}
const user2:Admin = {
    type:"admin",
    name:"pablo",
    age:23,
    role:"hero",
}
function getUserType(obj:User | Admin):string {
    return obj.type;
}

const whoIsThere = (obj:User | Admin):string => {
   return obj.type;
}

console.log(getUserType(user1));
console.log(getUserType(user2));
console.log(whoIsThere(user1));
console.log(whoIsThere(user2));



 