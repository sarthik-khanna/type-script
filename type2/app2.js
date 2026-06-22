class music {
    constructor(name, artist) {
        this.name = name;
        this.artist = artist;
    }
}
let m1 = new music("52 bars", "karan aujhla");
console.log(m1);
class Bottlemaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
let B1 = new Bottlemaker("milton", 1200);
console.log(B1);
// one more example of private access modifier
class Bottlemaker1 {
    constructor(name) {
        this.name = name;
    }
}
class miltonmaker extends Bottlemaker1 {
    constructor(name) {
        super(name);
    }
    getvalue() {
        console.log(this.name);
    }
}
let k1 = new miltonmaker("chilton");
console.log(k1);
// protected example
class Android {
    constructor() {
        this.name = "samsung";
    }
}
class Apple extends Android {
    constructor() {
        super(...arguments);
        this.price = 100000;
    }
    changename() {
        this.name = "one plus";
    }
}
let p1 = new Apple();
p1.changename();
console.log(p1);
// optional properties
class user {
    constructor(name) {
        this.name = name;
    }
    changename() {
        this.name = "loda";
    }
}
let u1 = new user("khanna");
// console.log(u1)
// u1.changename()
console.log(u1);
// one more example
class student {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let s1 = new student("khanna", 21);
console.log(s1);
/// static members
class shery {
    static getvalue() {
        return Math.random();
    }
}
shery.version = 1.0;
console.log(shery.version);
console.log(shery.getvalue());
// abstract classes 
class cookingEssentials {
    constructor(gas, gasname) {
        this.gas = gas;
        this.gasname = gasname;
    }
}
class sabji extends cookingEssentials {
}
export {};
//# sourceMappingURL=app2.js.map