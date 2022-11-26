// fabonacci series code
var a = Number(prompt("tell the first number"))
var b = Number(prompt("tell the second number"))
console.log(a);
console.log(b);
for (var i = 0; i < 60; i++) {
  var c = a + b
  console.log(c);
  a = b;
  b = c;
}
let x = 'Tic';
x = x + 'Tac';
x = x + x;
alert(x)
