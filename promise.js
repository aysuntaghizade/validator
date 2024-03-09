//!Creating a Promise:
// const createDelay=(resolve,reject)=>{
//     setTimeout (()=>{
//         return resolve('Delay Created')
//     },100)
// }
// let timePromise = new Promise(createDelay);
// timePromise.then((a)=> console.log(a));

//!Using Promises:
// const promise = new Promise((res,rej) => {
//     res("createDelay")
// })

// promise.then(function(data){
//     setTimeout(function(){
//         console.log(data);
//     },1000)
// }).catch(function(error){
//     console.error(error)
// })

//!Error Handling:
// const promise2 = new Promise((resolve,reject) => {
//     reject("Aysun")
// }).catch(function(error){
//     console.error(error);
// })

//!Chaining Promises
// const promise = new Promise((res,rej) => {
//     res("createDelay")
// })
// promise.then(function(msg){
//     setTimeout(function() {
//         console.log(msg);
//     }, 500)
//     return new Promise(res => {
//         res("Ikinci")
//     })
// }).then(function(two){
//     setTimeout(function(){
//         console.log(two);
//     }, 1000)
//     return new Promise(res =>{
//         res("ucuncu")
//     })
// })
// .then(function(two){
//     setTimeout(function(){
//         console.log(two);
//     }, 1500)
// })

//!Bonus Using."Promise.all":
// const promise1 = Promise.resolve(9);
// const promise2 = 4;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("azmiu");
//     }, 5000);
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
