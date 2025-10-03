//Filter function
//Filter also loops over the array element
//There is one special thing about filter, i.e the argument function f which we have to pass inside filter should always return a boolen, otherwiise the output will be converted to a boolean
//Filter loops over every element , passes that element in the arguement fucntion and then if the output of the this funciton call is true, then it stores the original element in a new array otherwise doesnt add this add element to the array

function oddOrEven(x) {
  return x % 2 == 0
  //return "abc" It will try to convert the output into boolean if not returned boolean
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const res = arr.filter(oddOrEven)
console.log(res)
