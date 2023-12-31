// function kiratsAsyncFunction() {
//     let p = new Promise(function(resolve) {
//       // do some async logic here
//       resolve("hi there!")
//     });
//     return p;
//   }
  
//   function main() {
//     kiratsAsyncFunction().then(function(value) {
//         console.log(value);
//     });
//   }
  
//   main();

// Using async await for the same code above
// by uysing async await we dont use .then() of Promises
function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
   
      resolve("hi there0");
    });
    return p;
  }
  
 async function main() {
    let value = await kiratsAsyncFunction();
    console.log(value);
    console.log("hi there1");
  }
  
  main();
  console.log("hi there2");