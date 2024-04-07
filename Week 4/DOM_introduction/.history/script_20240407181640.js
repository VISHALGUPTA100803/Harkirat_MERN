//debouncing, throtlling
let timeout;
function debouncepopulateDiv() {
  // delay the call to populateDiv until it is not called for 100 ms
  // and have been called at least once
  clearTimeout(timeout); // The clearTimeout function is used in JavaScript to cancel a timeout previously set with setTimeout
  timeout = setTimeout(function () {
    populateDiv();
  }, 100);
}
function populateDiv() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  //  fetch("http://localhost:8080/sum?a=" + a + "&b=" + b)
  fetch(`http://localhost:8080/sum?a=${a}&b=${b}`)
    .then(function (response) {
      // console.log(response); you can print response promise
      return response.text();
    })
    .then(function (ans) {
      document.getElementById("final sum").innerHTML = ans;
    });

    fetch("http://localhost:8080/interest?principal=100&rate=5&time=5")
    .then
}
// below is the populateDiv() function using async & await populateDiv() is promise syntax
// async function populateDiv2() {
//       const a = document.getElementById("firstNumber").value;
//   const b = document.getElementById("secondNumber").value;

//   const response = await fetch("http://localhost:8080/sum?a=" + a + "&b=" + b);
//   const ans = await response.text();
//   document.getElementById("final sum").innerHTML= ans;
//     }
