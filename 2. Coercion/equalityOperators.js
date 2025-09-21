//Equality Operators
//== and ===
//abstract equality vs strict equality

//People say abstract equality doesnt check type and strict equality checks type
//Absolutely not true, worst misconception ever
//But in reality abstract equality does type coercion before checking equality

//Both of them checks the type first, but what they do after that depends

//1.Abstract Equality
//a. If Type(x) is the same as Type(y), then
// Return the result of performing Strict Equality Comparison x === y.

//b. If x is null and y is undefined, return true.
//c. If x is undefined and y is null, return true.
//d. If Type(x) is Number and Type(y) is String,
// return the result of the comparison x == ToNumber(y).
//e. If Type(x) is String and Type(y) is Number,
// return the result of the comparison ToNumber(x) == y.
//f. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
//g. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
//h. If Type(x) is either String, Number, or Symbol and Type(y) is Object,
// return the result of the comparison x == ToPrimitive(y).
//i. If Type(x) is Object and Type(y) is either String, Number, or Symbol,
// return the result of the comparison ToPrimitive(x) == y.
// Return false.

// console.log("a" == "a")
// console.log(undefined == null)
// console.log(null == undefined)
// console.log(6 == "6")
// console.log("6" == 6)
// console.log(true == 1)
// console.log(1 == true)
// console.log(false == 0)
// console.log(0 == false)
// console.log("hi" == { name: "hi" }) //false
// console.log(
//   "hi" ==
//     {
//       toString() {
//         return "hi"
//       },
//     }
// ) //true
// console.log(0 == {}) //false
// console.log(
//   0 ==
//     {
//       toString() {
//         return 0
//       },
//     }
// ) //true
// console.log([] == 0) //true
// console.log([] == "") //true
// console.log([10] == 10) //true

// //2.Strict Equality
// //a. If Type(x) is different from Type(y), return false.
// //b. If Type(x) is Number, then
// // i. If x is NaN, return false.
// // ii. If y is NaN, return false.
// // iii. If x is the same Number value as y, return true.
// // iv. If x is +0 and y is -0, return true.
// // v. If x is -0 and y is +0, return true.
// // vi. Return false.
// //c. Return the result of performing the Abstract Equality Comparison x == y.
// console.log("a" === "a")
// console.log(6 === "6")
// console.log(true === 1)
// console.log("hi" === { name: "hi" })
// console.log(
//   "hi" ===
//     {
//       toString() {
//         return "hi"
//       },
//     }
// )
// console.log(0 === {})
// console.log(
//   0 ===
//     {
//       toString() {
//         return 0
//       },
//     }
// )
// console.log([] === 0)
// console.log([] === "")
// console.log([10] === 10)
// console.log(NaN === NaN) //false
// console.log(+0 === -0) //true
// console.log(-0 === +0) //true
// console.log(0 === -0) //true
// console.log(-0 === 0) //true
// console.log(Object.is(NaN, NaN)) //true
// console.log(Object.is(+0, -0)) //false
// console.log(Object.is(-0, +0)) //false
// console.log(Object.is(0, -0)) //false

console.log(null == false)
