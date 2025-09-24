//random unsorted array
let b = [1, 10, 100, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 9]

b.sort(function (a, b) {
  return a - b //if a<b then a-b will be negative-> comparator function gives negative then a is palced before b
  //if a>b , a-b will be positive, then if comparator function gives positive, b is placed before a
})
