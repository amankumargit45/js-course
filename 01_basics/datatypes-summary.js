//there are two types datatypes on the basis of how the data is being stored and retrieved from memory


//1.Primitive-seven categories-(changes in copy of data)-eg:String,NUmber,Boolean,null,undefined,Symbol
//BigInt

//javascript is dynamically typed language

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);//false not of same type


//2.Non primitive/reference types-Arrays,objects,functions 
//return type of non primitive datatype is always an object

const heroes=["aman","doga","naagraj"];//array
//object always within curley braces
let myobj={
    name:"aman",
    age:"22",
}


const myfunction=function(){
    console.log("hello wo0rld");
}

// console.log(heroes);

// memory manaagement in js
//+++++++++++++++++++++++++++++++
//

//Stack(primitive)here copy is given and heap(non-primitive)here refernce is given

let myname="aman"

let anothername=myname
anothername="chai"
console.log(myname);

console.log(anothername);

