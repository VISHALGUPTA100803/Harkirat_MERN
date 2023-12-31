// const fs = require('fs');

const { on } = require("events");

// // my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", function(err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile(onDone)
// console.log("hello world1");

// // writing the above same code with help of Promise
// // my own asynchronous function
// function kiratsReadFile() {
//     return new Promise(function(resolve) {
//       fs.readFile("a.txt", "utf-8", function(err, data) {
//         resolve(data);
//       });
//     })
//   }
  
//   // callback function to call
//   function onDone(data) {
//     console.log(data)
//   }
  
//   kiratsReadFile().then(onDone);
//    console.log("hello world1");

// Promise is a class
// Promise has three stages => pending, resolved, rejected
var d = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("hello world");
    }, 1000);
  
});

function callback() {
   console.log(d);
}
console.log(d);

d.then(callback);
