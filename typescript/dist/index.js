var u_name = "dhruv";
console.log(u_name);
var sum = function (a, b) {
    console.log(a + b, "-----");
};
sum(2, 5);
var testClass = /** @class */ (function () {
    function testClass(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return testClass;
}());
var newTest = new testClass(1, "dhruv", "dhurvc121@gmail.com");
/* newTest.id=1
newTest.name="dhruv"
newTest.email="dhruvc121@gmail.com" */
console.log(newTest);
var myFoo = function (para1, para2, para3) {
    console.log(para1, para2, para3);
    return 1;
};
var mynum = myFoo(1, "string", ['apple', 'mango', 'orange']);
