// fat Arrow function

const Sum = (a , b) => {
    let c = a+b;
    return `${a} + ${b} : ${c}`;
}

const Sum2 = (a,b) => `${a} + ${b} : ${a+b}`;

console.log(Sum(5 , 8));
console.log(Sum2(15 , 84));