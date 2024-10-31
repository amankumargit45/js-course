//dates
let mydate=new Date()//it is an object
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());

let mycreateddate=new Date(2024,0,22,5,3)
// console.log(mycreateddate.toLocaleString());//1/22/2024 , 5:03:00 AM
let mycreateddate1=new Date("01-12-2024")
// console.log(mycreateddate1.toLocaleString());

let mytimestamp= Date.now()
//  console.log(mytimestamp);//gives time in millisecond from 1 january 1970
// console.log(mycreateddate1.getTime());
console.log(Math.floor(Date.now()/1000));// gives time in second

let newdate=new Date()
console.log(newdate.getMonth());

console.log(newdate.toLocaleString('default',{
    weekday:"long"
}))