//singleton
//object literals
const arr={
    roll:67,
    studName:'Kavita',
    age:21,
    Location:'solapur',
    email:'kavitachimman4@gmail.com'
}
console.log(arr.email);
console.log(arr['Location']);
arr.email='k91751236@gmail.com'
Object.freeze(arr)
arr.email='kavitachimman4@gmail.com'
console.log(arr);

arr.greeting=function(){
    console.log('hello');
    
}
console.log(arr.greeting());

