// 12 + 13
//Number + number

// 12 + '13'
//Number + string
// It does concatenation
//1213

// '1' -1
//string - number
//answer = 0

//Coercion means typecasting

//1. Abstract Operations- exist in the world of javascript only
// These are some set of algorithms , that is present in ecmascript docs , but they are not available for usage in ecmascript
// i.e we as developers cannot use them directly
//Just for documentation part

//2. They are mentioned in the docs to aid (help ) the documenttaion only.
//In the ecma docs, there are a lot of things that re done by the language internally.

// console.log(toNumber(undefined))

//Taking the example of subtraction operation from the documentation
// ToNumber(10)
console.log(2 - 9)
//ToNumber for null undefined and true
console.log(2 - null)
console.log(2 - undefined)
console.log(2 - true)

//ToNumber for string
console.log(1 - "456") //456 gets converted to a number
console.log(10 - "238329bhb32") //cannot get converted to a number due to the string present in the middle

//assignment:
console.log(1 - "0xa")
console.log(1 - "infinity")
console.log(1 - "Infinity")
console.log(1 - "0b1101")
console.log(10 - "0o3")
console.log(100 - "1e2")

//ToNumber for strings
//Gives error if tried to subtract the symbols
console.log(1 - "kdsjfalkd")

//ToNumber for objects
//we need to learn toPrimitives which needs to be studied seperately

//Case 1: If preferred type is not present , let hint be default
//Case 2: If preferred type is a string, let hint be string
//Case 3: If preferred type is a number, let hint be number

//Trying to play around with toPrimitive and ordinaryToPrimitive:
//Since it is an abstract operation, we cannot call toPrimitive directly,
//So we need to play around with toNumber but even that is an abstract operation so we call subtract operation to play around
//passing arguments and values
