function getJoke() {
    var promise = functionRequest("GET", "http://api.icndb.com/jokes/random", true); // I create a variable, I assign a function and I pass the parameters to it.

    promise.then(function(response) {
        var valor = JSON.parse(response);
        document.getElementById("joke").innerHTML = valor.value.joke;
    }, function(error) {
        document.getElementById("box").style.backgroundColor = 'Red';
        console.log(error);
    });
}

function functionRequest(method, url, async) {

    var myPromise = new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status < 399) {
                resolve(this.responseText); // Notice by console that everything went well.
            } else if (this.readyState === 4 && this.status > 399) {
                reject(error("Something went wrong")); // Notice by console that something went wrong.
            }
        };
        request.open(method, url, async);
        request.send();
    });
    return myPromise;
}