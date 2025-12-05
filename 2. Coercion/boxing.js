console.log("abc".toString());
console.log(1.toString());

//so in this case we need 

1.toString();
VM1720:1 Uncaught SyntaxError: Invalid or unexpected token

"abc".toString()
'abc'

undefined.toString();
VM1824:1 Uncaught TypeError: Cannot read properties of undefined (reading 'toString')
    at <anonymous>:1:11
(anonymous) @ VM1824:1


(1).toString();
'1'


2.toString();
VM1917:1 Uncaught SyntaxError: Invalid or unexpected token


(2).toString();
'2'


Number(1).toString();

'1'