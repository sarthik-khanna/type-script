class bottleMaker {
    constructor(public name:string,public price:number){

    }
}


let b1 =new bottleMaker("milton",1000)


class music {
    constructor(public name:string,public length:number,public free:boolean,public thumbnail : string){
if(!thumbnail){
    this.thumbnail = "rehanrecords";
}
    }
}

let m1 = new music("winning speech",1200,false,"")