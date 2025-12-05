function fetchNextElement(array) {
  let idx = 0
  function next() {
    if (idx == array.length) {
      return undefined
    }
    const nextElement = array[idx]
    idx++
    return nextElement
  }
  return next
}

//Somewhere later we consume it
const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4])
//Inside automatic fetcher variable we can store next variable
console.log(automaticFetcher())
console.log(automaticFetcher())
console.log(automaticFetcher())
console.log(automaticFetcher())
console.log(automaticFetcher())
console.log(automaticFetcher())

//Tried implementing declarative code here, like imagine fetchNextElement exists, below when we call the function we dont actually tell how to do the fetching( imagine fetchNextElement was written, you didnt write it)
//In this way we could call some functions and achieve result in declarative manner without having to write everything
//What we did here was we iterated over all the elements of the array ( basically an iterator)
//EG : In C++: We do next(), push_back()
//In python: we have next() so basically , they were written already and we just use them without writing the logic for them each and everytime

//---------------------------------------------------------------------------------------------------------------
function fetchNextElement2(array) {
  let idx = 0
  function next() {
    if (idx == array.length) {
      return undefined
    }
    const nextElement = array[idx]
    idx++
    return nextElement
  }
  return { next } //We are returning object here because inbuilt javascript iterator is an object, we could just return next here without it being object as well, no problem
}

//Somewhere later we consume it
const automaticFetcher2 = fetchNextElement2([99, 11, 12, 13, 0, 1, 2, 3, 4])
//Inside automatic fetcher variable we can store next variable
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())
console.log(automaticFetcher2.next())

//Thats the difference if we return object or if we return an function itself
