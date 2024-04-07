let timeout;

function debouncepopulateDiv() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        populateDiv();
    }, 100);
}

function populateDiv() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;

    fetch("http://localhost:8080/sum?a=" + a + "&b=" + b)
        .then(function(response) {
            response.text().then(function(ans) {
                document.getElementById("final sum").innerHTML = ans;
            });
        });
}
