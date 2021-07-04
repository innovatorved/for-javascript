// JavaScript Variables

/*
    In a programming language, variables are used to store data values.
    JavaScript uses the keywords var, let and const to declare variables.
    An equal sign is used to assign values to variables.
    In this example, x is defined as a variable. Then, x is assigned (given) the value 6:
*/

/*
    The let keyword was introduced in ES6 (2015).
    Variables defined with let cannot be Redeclared.
    Variables defined with let must be Declared before use.
    Variables defined with let have Block Scope.
*/
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
console.log(z);

let a, b;
a = 5 + 6;
b = a * 10;
console.log(a);
console.log(b);

/*
There are 3 ways to declare a JavaScript variable:

    Using var
    Using let
    Using const

This chapter uses var.

The let and const keywords are explained in the next chapters.

*/
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
console.log(total);


/*
    The const keyword was introduced in ES6 (2015).
    Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
    Variables defined with const have Block Scope.
*/

const PI = 3.141592653589793;
PI = 3.14;
PI = PI + 10;

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 