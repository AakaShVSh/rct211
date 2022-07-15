console.log("hello world");
//boolen
let isFetching:boolean = false;

isFetching = true;
//obj
const obj:object = {
    "name":"a"
};
//array
const arr:number[] = [1,2,3,4];
arr.push(5);
console.log(arr);
const namearr:string[] = ["honey,boldy,poldy"]
//string
const first_name:string = "hii";
const last_name:string = "by";
const full_name:string = `${first_name}_${last_name}`;
console.log(full_name);
//number
const age:number = 33;
//tuple 
const tuple:[string,boolean,number] = ["hii",true,7];

//enum

enum usertype {
    User="User",
    SuperUser="SuperUser",
    Admin="Admin",
    SuperAdmin="SuperAdmin"
}

const whoisthere = usertype.SuperAdmin;
console.log(whoisthere);

//function

function productOfTwo(a:number,b:number):number {
   return a * b;
}
productOfTwo(3,5)

const product = (a:number,b:number): number => {
   return a * b;
}

const Divide = (a:number,b:number): number => {
    return a / b;
}
Divide(4,2);

const prinTName = (s:string) => {
    console.log(s);
}
prinTName("goku")