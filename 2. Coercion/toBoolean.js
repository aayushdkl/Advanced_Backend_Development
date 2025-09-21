//We have undefined,null,0,NaN,"",+0,-0 are all false as falsy values
//-29 is true as truthy value
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(+0))
console.log(Boolean(-0))
console.log(Boolean(-29))

let x = 10
console.log(!x)
let y = undefined
console.log(!y)

// if(condition): The condition is always tried to be converted to toBoolean

if (10) {
  console.log("this will be printed")
}

if (y) {
  console.log("It is truthy")
} else {
  console.log("it is falsy")
}
