function myFunction(p1, p2) {
    // p1 and p2 are arguments
    return p1 * p2;   // The function returns the product of p1 and p2
  }

let x = myFunction(4, 3);   // Function is called, return value will end up in x
console.log(x);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
let c = toCelsius(77);
let text = "The temperature is " + c + " Celsius";