//NaN is the only value in javascript whose value is not equal to itself

console.log(Number("123"))
console.log(Number("abc"))
console.log(Number("0xa"))

let x = NaN

console.log(x == NaN)

console.log(isNaN(x))
console.log(isNaN("aayush")) // When we use isNaN, we are technically looking if we can evaluate values like x , which is NaN
//Not if something is not a number, but literally if it is NaN datatype
//isNan converts the incoming input to a number, so we get a true here, when we shouldnt have got true here

//Number.isNaN doesnt convert the input to a number, so we can get exact results
console.log(Number.isNaN("aayush"))
console.log(Number.isNaN(x))

if (typeof x == "number" && x != x) {
  console.log(true)
}
