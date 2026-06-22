let arr = [1,2,3,"khanna"]

let arr1 : number[] = [1,2,3,4]

// tuples 

let arr2: [string,number] = ["khanna",123]


// enumerations

enum userRoles {
ADMIN = "admin",
SUPERADMIN = "superadmin",
USER = "user"
}

userRoles.ADMIN;


enum statusCode {
NOTFOUND = "status code not found 404",
RUN = "status send to code 202"
}

statusCode.NOTFOUND

// ANY

let a:unknown;
a=17;
a="khanna"
if (typeof a === "string"){
    a.toUpperCase
}


function abcd () {
while(true){

}
}

abcd();
console.log("khnana")



// any
let x;
x =9;
x="khanna"


// unknown 

let y: string;

y ="khanna"
// y=7;

if (typeof y=== "string"){
    y.toUpperCase();
}


// void 

function xyz ():number{
    return 24;
}


// arrays

let arr4 : number[] = [9,8,7,5];


// tuples

let array8 : [string,number] = ["khanna",96]

// type interfernce

let z = "khanna" // this means type interference

// type annotation 

let k : string | number | boolean

k  = "adb";
k=67;
k=true;

// interference
interface User{
    name:string,
    email:string,
    password:string
}

function getdataUser (obj:User){

}


getdataUser({
    name:"khanna",
    email:"khanna28@gmail.com",
    password:"009"
})


// types

type sankhyaa = string | number

let l:  sankhyaa;

type arg = string | number 

function getvalue(obj:arg){

}

getvalue("khanna")

// type aliases


// intersection of type

type User2 ={
    name:string,
    email:string
}

type Admin = User2 &{
    getDetails(user:string) :void
}

function xyz3(a:Admin){
    a.getDetails
}

xyz3();


// khanna interface 


interface khanna {
   name:string,
   rollno : number,
   id:string 
}


function skinfo(obj : khanna){

}

skinfo({name:"sarthik",rollno:2320495,id:"jatt"})
