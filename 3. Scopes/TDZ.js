console.log(x)
const x = 2

//TDZ (Temporal Dead Zone) is the time between the entering of a scope and the actual declaration of a variable. In this zone, the variable is not accessible and will throw a ReferenceError if accessed. This applies to variables declared with let and const, but not with var, which is hoisted and initialized with undefined.

//In the above example, we are trying to access the variable x before it is declared with const. This will throw a ReferenceError because x is in the TDZ until the line where it is declared. If we had used var instead of const, it would have logged undefined instead of throwing an error, because var declarations are hoisted and initialized with undefined.
//TDZ helps to catch errors and bugs in the code by preventing access to variables before they are declared. It encourages better coding practices by ensuring that variables are declared before they are used.

//To avoid TDZ issues, always declare variables at the top of their scope before using them. This ensures that they are accessible when needed and helps to prevent runtime errors.
