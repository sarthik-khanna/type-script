let a = Number("12");
// console.log( typeof a)
// type guards
function adcd(arg) {
    if (typeof arg === "number") {
        return "It is a number";
    }
    else if (typeof arg === "string") {
        return "It is a string";
    }
}
console.log(adcd("helllooooo")); // It is a string
console.log(adcd(100)); // It is a number
export {};
//# sourceMappingURL=typecast.js.map