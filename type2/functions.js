function adcde(name, age, cb) {
    cb("khanna");
}
adcde("khanna", 34, (arg) => {
    // console.log(arg)
});
// optional and default parameter
function info(name, age, gender = "not to be disclosed") {
    // console.log(name,age,gender)
}
info("khanna", 21, "male");
info("lagbataq", 90);
// rest parameters
function xyz(...arr) {
    console.log(arr[0]);
}
console.log("khanna", "madhur", "navya", "rohan", "vani", "sk");
function ooyu(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && b === "number") {
        return 123;
    }
    // else throw new Error("wrong");
}
ooyu("sk");
ooyu("kjkjksa", 65);
export {};
//# sourceMappingURL=functions.js.map