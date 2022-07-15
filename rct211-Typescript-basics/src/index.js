console.log("hello world");
//boolen
var isFetching = false;
isFetching = true;
//obj
var obj = {
    "name": "a"
};
//array
var arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
var namearr = ["honey,boldy,poldy"];
//string
var first_name = "hii";
var last_name = "by";
var full_name = "".concat(first_name, "_").concat(last_name);
console.log(full_name);
//number
var age = 33;
//tuple 
var tuple = ["hii", true, 7];
//enum
var usertype;
(function (usertype) {
    usertype["User"] = "User";
    usertype["SuperUser"] = "SuperUser";
    usertype["Admin"] = "Admin";
    usertype["SuperAdmin"] = "SuperAdmin";
})(usertype || (usertype = {}));
var whoisthere = usertype.SuperAdmin;
console.log(whoisthere);
//function
function productOfTwo(a, b) {
    return a * b;
}
productOfTwo(3, 5);
var product = function (a, b) {
    return a * b;
};
var Divide = function (a, b) {
    return a / b;
};
Divide(4, 2);
var prinTName = function (s) {
    console.log(s);
};
prinTName("goku");
