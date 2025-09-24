function fun() {
  var i
  if (x % 2 == 0) {
    i = 0
  } else {
    i = 1
  }
}

function gun(x) {
  if (x % 2 == 0) {
    var i = 0
  } else {
    var i = 1
  }
  console.log(i)
}
gun(10)

//Use case of var : When we want to use a variable outside the block in which it is defined.
//Like in the above example , we are using i outside the if-else block. So we use var here.

//But if we use let instead of var here , it will give error as i is not defined.
//So in this case , we should use var only.
//But if we want to use i only inside the if-else block , then we should use let instead of var.
//So it depends on the use case.
