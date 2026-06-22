function adcde(name:string,age:number, cb:(arg:string)=>void){
cb("khanna");
}

adcde("khanna",34,(arg:string)=>{
    // console.log(arg)
})


// optional and default parameter

function info(name:string,age:number,gender:string="not to be disclosed"){
    // console.log(name,age,gender)
}

info("khanna",21,"male")
info("lagbataq",90)


// rest parameters

function xyz(...arr:string[]){
console.log(arr[0])
}

console.log("khanna","madhur","navya","rohan","vani","sk")


// fucntion overloading


function ooyu(a:string):void;
function ooyu(a:string, b:number):number;

function ooyu (a:any,b?:any){
    if (typeof a === "string" && b===undefined){
console.log("hey")
    }
    if(typeof a==="string" && b==="number"){
        return 123;
    }
    // else throw new Error("wrong");
    
}

ooyu("sk")
ooyu("kjkjksa",65)