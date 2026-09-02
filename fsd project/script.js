// let user={
//     name:"v",
//     age:27,
//     address:{
//         city:"delhi",
//         pincode:110001
//     }
// };

// // let copyuser={...user}
// // copyuser.address.city="mumbai";
// // console.log(user);
// // console.log(copyuser);


// let copyuser=Object.assign({},user);
// copyuser.address.pincode=100001;

// console.log(user);
// console.log(copyuser);


// let arr=[1,2,3];
// let arrcopy={...arr};
// arrcopy[0]=10;

// console.log(arr);
// console.log(arrcopy);

// let user = [
//     {
//         name:"vikas"
//     },
//     {
//         name:"rahul"
//     }
// ]

// let usercopy=[...user];
// usercopy[0].name="aman"

// console.log(user);

// let deepcopy = JSON.parse(JSON.stringify(user));

// deepcopy.address.city="mumbai"
// console.log(user);
// console.log(deepcopy);

// // promise in javascript

// let promise = new promise(function(resolve,reject){
//     let success = true;


//     if(success){
//         resolve("task done");
//     }
//     else{
//         reject("failed");
//     }


// });

// promise.then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });


function validateMobile(num) {
    let regex = /^[6-9]\d{9}$/;
    return regex.test(num);
}

console.log(validateMobile("9876543210"));
console.log(validateMobile("1234567890"));








