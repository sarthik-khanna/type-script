class bottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new bottleMaker("milton", 1000);
class music {
    constructor(name, length, free, thumbnail) {
        this.name = name;
        this.length = length;
        this.free = free;
        this.thumbnail = thumbnail;
        if (!thumbnail) {
            this.thumbnail = "rehanrecords";
        }
    }
}
let m1 = new music("winning speech", 1200, false, "");
export {};
//# sourceMappingURL=constructor.js.map