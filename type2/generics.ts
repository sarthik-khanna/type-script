function LDH <T>(a:T){
console.log(a)
}

LDH(87)


// interface generics

interface halua<T>{
    name:string;
    age :number;
    key:T;
}


function hallla(obj:halua<string>){
obj.name
}

hallla({
   name:"khanna",
   age:78,
   key:"ijwjwkj"

})


// generics class

class body<H>{
constructor(public key:H){

}
}

let n1 = new body("hola");
let n2 = new body(65);

console.log(n1,n2)







