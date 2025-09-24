//eg of an unsorted array
let unsorted = [1, 10, 9, 100, 1000, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20]
const res = unsorted.sort()
console.log(res)

//Default sort does lexicographical sorting
//To sort in ascending order we need to pass a comparator function
const asc = unsorted.sort((a, b) => a - b)
console.log(asc)

//The meaning of lexicographical sorting is that it converts each element to a string and then compares their sequences of UTF-16 code unit values.
//Dictionary order
//For example, "100" is less than "9" because "1" is less than "9".
//Similarly, "Apple" is less than "Banana" because "A" is less than "B".

//In the above example
/**
 * 0=A
 * 1=B
 * 2=C
 * 3=D
 * ...
 * 8=I
 * 9=J
 * 10=K
 * 11=L
 * 12=M
 *
 * So the array unsorted becomes:
 * ["1", "10", "100", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2", "20", "9"]
 * i.e in alphabets:
 * ["A", "K", "BA", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "B", "U", "J"]
 *
 * Hence the sorted array is:
 * ["1", "10", "100", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2", "20", "9"]
 * ["A", "K", "BA", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "B", "U", "J"]
 *
 * which is the same as the output of the default sort
 * ["1", "10", "100", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2", "20", "9"]
 * ["A", "K", "BA", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "B", "U", "J"]
 */

//When to use maps?
/**
 * In any situation when we have to do an operation on every element of the arrya
 * and store the result of each operation
 * map can be a good option
 *
 * For example:
 * Array of product objects
 */

//Getting index with maps
const newArr = [9, 8, 7, 6, 5]
/*
If the function that we are passing in map takes two arguemts
then the first argument will be a accessing the actual value
second argument will be accessign the index of that value
 */

function print(element, index) {
  return `Element at index ${index} is ${element}`
}

//here map is looping over every elemnt , index in the function print

const resIs = newArr.map(print)
//In map, when we pass a function as argument, the first argument of the function is an element, the second one is an index
console.log(resIs)
