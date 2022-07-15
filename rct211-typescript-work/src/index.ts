interface User{
    title:string,
    status:boolean,
    id:number,
}
interface Name{
    firstname:string,
    lastname:string,
}
//2nd
const user1:Name = {
    firstname:"xyz",
    lastname:null,
}
const user2:Name = {
    firstname:"pika",
    lastname:"dika",
}
const printName = (obj:Name):string => {
      if(obj.lastname!=null){
        return obj.firstname+" "+obj.lastname;
      };
      return obj.firstname;
}

console.log(printName(user1));
console.log(printName(user2));

//3rd

interface Address{
    houseNumber:string,
    street:string,
    city:string,
    state:string,
    postalCode:string,
    country:string,
} 

//4th
interface PersonDetails{
    Prefix:string,
    phones:string[], 
    addresses:string[],
    email:string,
    firstname:string,
    lastname:string,
    middlename:string, 
} 

//5th
const personDetails:PersonDetails={
    Prefix:null,
    phones:["1234567890"],
    addresses:["lili rood"],
    email:null,
    firstname:"pika",
    lastname:"dika",
    middlename:null,
}  

let alldetail:any[]=[]

const PhoneBook = (obj:PersonDetails):void => {
    alldetail.push(obj);
}
PhoneBook(personDetails)
console.log(alldetail)