
//setTimeout
// console.log("Before setTimeout");
// setTimeout(()=>{
//     console.log("Inside of setTimeout _________");
// },5000);
// console.log("After setTimeout");


// setInterval
// setInterval(()=>{
//     console.log("setInterval..............");
// },3400);



//Event Loop
console.log("Before setTimeout 1");
setTimeout(()=>{
    console.log("setTimeout 1" );
},15000);
console.log("After setTimeout 1");

console.log("Before setTimeout 2");
setTimeout(()=>{
    console.log("setTimeout 2" );
},9000);
console.log("After setTimeout 2");