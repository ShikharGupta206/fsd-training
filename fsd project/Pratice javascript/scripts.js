function add(p,q){
    return p+q;
}
console.log(add(10,20))

// //arrow function

const multiply=(p,q)=>p*q;
console.log("arrow function",multiply(5,5))

// //why we are using constant values?
// //arrow function just act likes lambda function in python it reduces the code part of the program

// //array
let arr=[10,20,30,40];
console.log(arr[0]);
arr.push(20);
arr.pop()
console.log(arr);

//object
// let student -{

// }

// math function

console.log(Math.random());

//string

text="hello world";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("java"));

//type conversion

let strnum="123"
let convert=Number(strnum);
console.log(convert);

//NAn

console.log(isNaN("abc"));
console.log(isNaN(123));


setTimeout(()=>{
    console.log("absjs")
},2000);

//try catch

try{
    let result=x/0;
    console.log(result);
}
catch(error){
    console.log("error");
}






