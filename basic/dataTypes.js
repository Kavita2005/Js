/* DATA TYPES 

number=> 1 to n
String=>""
boolean=>true or false
null=> it is standalone value
undefined=> if not define any value then it automatic assign undefined
*/


//datatypes
console.log(typeof 21);
console.log(typeof 'Kavita');
console.log(typeof null);// object
console.log(typeof undefined);
console.log(typeof true);

//conversion string to number
let s='21'
console.log(typeof s);
let valueIN=Number(s)
console.log(typeof valueIN)
console.log(valueIN);


let n=null
console.log(typeof(n), n);
//****** convert 0/1 to boolean
let isLog=0
let booleanisLog=Boolean(isLog)
console.log(booleanisLog);
//1=>true & 0=>false
//""=>false & "k"=>true


//*****convert string to number*****
let num=21
let stringNum=String(num)
console.log(stringNum);
console.log(typeof (stringNum));


//*****Oprations */
console.log(2+3);
console.log(2-2);
console.log(2*4);
console.log(2**3);
console.log(8/2);

let s1='kavita'
let s2='chimman'
console.log(s1+" "+s2);

let game=100
game++
console.log(game);

//pstifix increment
 let x=4
 let y=x++
 console.log(x,y);
 
//prefix increment
let x1=5
let y1=++x1
console.log(x1,y1);


//Comparision oprations
console.log(2>4);//false
console.log(2<4);//true
console.log(2<=1);//f
console.log(3>=4);//f
console.log(3!=4);//t
console.log(3==3);//t

//avoid null comparision
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);



//different dataTypes comparison 
console.log('2'==2);//not return true
console.log('2'===2);//strictly checks datatypes if not same datatypes then returns false


//DataTypes
//1. Primitive => string, number, boolean,null,undefind,bigInt,symbol
//2. non-premitive =>object,array,function
//symbol example
const id=Symbol('1234')
const userid=Symbol('1234')
console.log(id===userid);
//bigInt example
const bigNum=1238746666n
console.log(bigNum);


//Array example
const studName=['kavita','Mrudula','Shifa']
let studAge={
    age:21,
}
console.log("Student name is :",studName);
console.log(studAge);
//function example
const myfun=function() {
    console.log("hello world"); 
}
myfun()









