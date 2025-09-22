var teacher = "Aayush" //teacher -> global --> Aayush

function ask(question) {
  //ask --> global
  console.log(teacher, question)
}
function fun() {
  //fun--> global
  var teacher = "Pulkit" //teacher --> fun -->pulkit
  ask("why?")
  console.log(teacher)
}

fun()
