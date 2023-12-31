
// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i<n; i++) {
//       ans += i;
//     }
//     return ans;
//   }
  
//   function findSumTill100() {
//     console.log(findSum(100));
//   }
//   //busy waiting
// //   function syncSleep() {
// //     let a=1;
// //     for(let i=0;i<1000000000;i++){
// //       a++;
// //     }
// //   }
// //   syncSleep();
// //   findSumTill100();
//   setTimeout(findSumTill100, 1000); // set timeout is async function
//   console.log("hello world");
  
const fs = require("fs");
//filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
    console.log(err);
}); // async function

console.log("hello world1");
let a=0;
// it takes longer time ,longer than the file read
for(let i=0;i<1000000000;i++){
  a++;
}

console.log("hello world2");
console.log("hello world3");