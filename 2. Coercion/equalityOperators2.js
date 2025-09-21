// == double equality does coercion
// === triple equality doesnt do coercion

let obj = { x: 10, y: 20 }
let num = 10

//Templatized string
console.log(`My object is ${obj}`)
console.log(`My object is ${num}`)

console.log(1 < 2 < 3) // (1<2)-->true then true<3 i.e 1<3 --> true
//So the answer is true

console.log(3 > 2 > 1) //(3>2)--> true  then true>1 i.e 1>1 -->false
//So the answer is false

//Explicit Conversion
console.log(Boolean(" "))
console.log(String(123))
