const score=4000
const balance=new Number(1000)
// console.log((balance));
// console.log(balance.toString());//1000

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//gives the value upto 2 decimal points - 100.00

let othernum=23.8798
// console.log(othernum.toPrecision(3));//23.9
 othernum=127.890
// console.log(othernum.toPrecision(3));//128

const num=1000000
// console.log(num.toLocaleString('en-IN'));//gives 10,00,000

//++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.7));//5
// console.log(Math.ceil(4.3));//5
// console.log(Math.sqrt(4));

console.log(Math.random());// gives random values from 0 to 1
console.log((Math.random()*10) +1);

const min=10
const max=20

//formula
console.log(Math.floor(Math.random()*(max-min+1))+min);//gives values ranging between min to max

