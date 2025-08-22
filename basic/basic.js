//console.log("kavita");
/*
 var → function-wide, old.
let → block-local, changeable.
const → block-local, unchangeable.
 */
const myName='kavita'
let rollNo=67
var id=1222

rollNo=68
id=12888
//myName='savita'
console.table([myName,rollNo,id])


if(true){
    var a=10 
}
 console.log(a);//still accessible outside block

if (true){
    let b=20
    
}
console.log(b);//not accessible outside block

const c=10
c=30  // Fixed value (cannot change).
console.log(c);


