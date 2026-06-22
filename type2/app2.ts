class music{
    constructor(public name :string,public artist:string){

    }
}
 let  m1 = new music("52 bars","karan aujhla");
 console.log(m1)


class Bottlemaker{
    constructor(private name:string,public price:number){
        this.name=name;
        this.price=price;
    }
}

let B1 = new Bottlemaker("milton",1200);
console.log(B1)


// one more example of private access modifier

class Bottlemaker1{
    constructor(private name :string){

    }
} 


class miltonmaker extends Bottlemaker1{
constructor(name:string){
    super(name);
}
getvalue(){
    console.log(this.name)
}
}

let k1 = new  miltonmaker("chilton");
console.log(k1)



// protected example
class Android { 
    protected  name = "samsung";
}

class Apple extends Android{
    public price = 100000;

    changename(){
        this.name = "one plus"
    }
}


let p1 = new Apple();
p1.changename()
console.log(p1)


// optional properties

class user {
    constructor(public readonly name :string){

    }

    changename(){
        this.name= "loda";
    }
}

let u1 = new user("khanna");
// console.log(u1)
// u1.changename()
console.log(u1)


// one more example

class student{
    constructor(public name : string,public age:number,public gender?: string){

    }
}

let s1 = new student("khanna",21)
console.log(s1)


/// static members

class shery{
    static version = 1.0

    static getvalue(){
        return Math.random()
    }
}
console.log(shery.version)
console.log(shery.getvalue())


// abstract classes 

class cookingEssentials {
    constructor(protected gas:number , protected gasname:string){

    }
}

class sabji extends cookingEssentials{
     
}