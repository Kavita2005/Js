//date functions

let mydate=new Date()
console.log(mydate.toDateString());// o/p=>Mon Aug 25 2025
console.log(mydate.getFullYear());
console.log(mydate.toLocaleString());//o/p => 8/25/2025, 2:28:22 PM
console.log(typeof mydate);

const mydate1=new Date(2005,1,4,8,30)
console.log(mydate1.toDateString());//Fri Feb 04 2005
console.log(mydate1.toLocaleString());//2/4/2005, 8:30:00 AM

//time functions
let ourTime=Date.now()
console.log(ourTime);
console.log(mydate1.getTime())
console.log(Math.floor(Date.now()/1000))

let ndate=new Date()
console.log(ndate.getDate())
console.log(ndate.getDay())









