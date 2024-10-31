const name="aman"
const repocount=50
// console.log(name+repocount+"valuer");
// console.log(`hello my name is ${name} my repo count is ${repocount}`);//`` - it is called backticks(string interpolation)
const name1=new String('aman-kumar-gupta')
// console.log(name1);
// 0:"a" these are key-value pairs not indexes like in arrays 
// 1:"m"
// 2:"a"
// 3:"n"
// console.log(name1.__proto__);

// console.log(name1.toUpperCase());
console.log(name1.charAt(3));
console.log(name1.indexOf("m"));
console.log(name1.substring(0,3));

const anotherstring =name1.slice(-3,-1);// you can also give negative values to this function 
// it will start from reverse  direction when negative values is given to it
console.log(anotherstring);


const newstring1="   aman   ";
console.log(newstring1);
console.log(newstring1.trim());// removes the extra space given in the string

const url="https://tinyurl.com/aman%30kumar"
console.log(url.replace('%30','-')); // it will replce the %30 to -
console.log(url.includes('aman'));// includs tell me whether a that thing is included in string or not

//converting string to array
console.log(name1.split('-'));//it will give me an array in which all the strings are included as individual elemnnt
//which are seperted by '-'



