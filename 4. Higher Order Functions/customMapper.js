const newArr = [9, 8, 7, 6, 5]

function print(element, index) {
  return `Element at index ${index} is ${element}`
}

function customMapper(arr, func) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i))
  }
  return res
}

const value = customMapper(newArr, print)

console.log(value)
