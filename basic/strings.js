
const uname='kavita'
const d='a,b,c'
const lname='chimman'
console.log(uname+" "+lname);
console.log(`my name is ${uname} and my last name is ${lname}`);

console.log(lname.length);//Returns length of string
console.log(lname[5]);
console.log(lname.__proto__);//It shows you all the methods available on strings
console.log(lname.slice(2,7));//Part of string
console.log(lname.charAt(2));//Returns character at index
console.log(uname.toUpperCase());
console.log(lname.indexOf('m'));//Returns character  index number
console.log(uname.charCodeAt(1));//Unicode of character
console.log(uname.includes('ta'));//if string is found then return true otherwise false
console.log(uname.startsWith('k'));
console.log(d.split(','));
console.log(uname.concat('chimman'));
console.log(uname.replace('kavita','avita'));
console.log(uname.repeat(5));














