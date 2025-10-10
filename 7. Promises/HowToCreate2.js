new Promsise(function (resolve, reject) {
  //inside this function we can write out time consuming task
})

//The callback function is also known as executor function
//Whenever the implementation of executor callback you call the resolve function, the promise goes to a fulfileed state
//If you call reject function , it goes to a rejected state and if you dont call anything the promise remains in the pending state forever

//The promise also has value :
//Till the time it is in pedning the value is undefined
//The value can change when the state is in fulfilled or in rejected state
resolve(x)
//With whatever argument we call resolve or reject with gets assigned to the value property
