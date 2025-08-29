const  arr=[1,2,3,4,'kavita']
console.log(arr[4]);
const uName=['Kavita','Mrudula','shifa']
console.log(uName.length);

//Array Methods


arr.push(5)
arr.push(10)
arr.pop()
arr.unshift(9)// added element in front
arr.shift()
console.log(arr);
console.log(arr.includes('kavita'));
console.log(arr.indexOf(5));
const newArr=arr.join()
console.log(newArr);// it converts string

//slice ,splice

console.log("A",arr);
const myarr=arr.slice(2,5)//get values
console.log(myarr);
console.log("B",arr);
const myarr2=arr.splice(2,5)
console.log("c",arr);
console.log(myarr2);

const studName=['Kavita','Mrudula','Shifa']
const lName=['Chimman','Sadafule','koti']
const c2=studName.concat(lName)
console.log(c2);

const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const let_another=anotherarr.flat(Infinity)
console.log(let_another);

console.log(Array.isArray("Kavita"));//returns false
console.log(Array.from("Kavita"));//returns array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));












