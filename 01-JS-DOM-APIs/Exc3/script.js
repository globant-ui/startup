var promise = functionRequest("GET", "http://api.icndb.com/jokes/random", true); // I create a variable, I assign a function and I pass the parameters to it.

function functionRequest(method, url, async) {
    var myPromise = new Promise(function(resolve, reject) { // I create my promise.

        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var valor = JSON.parse(this.responseText);
                document.getElementById("joke").innerHTML = valor.value.joke;
                resolve("Everything is fine"); // Notice by console that everything went well.
            } else {
                document.getElementById('box').style.backgroundColor = 'Red';
                reject(Error("Something went wrong")); // Notice by console that something went wrong.
            }
        };
        request.open(method, url, async); // I use the arguments of my function to make the request to the API that I want.
        request.send();
    });
    return myPromise;
}

promise.then(function(response) {
    console.log(response);
}, function(error) {
    console.log(error);
});



// TODO ESTO ANDA //

// var promise = functionRequest("GET", "http://api.icndb.com/jokes/random", true); // Creo una variable y le asigno una funcion.

// function functionRequest(method, url, async) {
//     var myPromise = new Promise(function(resolve, reject) { // Creo mi promesa.

//         var request = new XMLHttpRequest();

//         request.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var valor = JSON.parse(this.responseText);
//                 document.getElementById("joke").innerHTML = valor.value.joke;
//                 resolve("Todo salio bien!");
//             } else {
//                 reject(Error("Algo salio mal..."));
//             }

//         };
//         request.open("GET", "http://api.icndb.com/jokes/random", true);
//         request.send();
//     });
//     return myPromise;
// }

// promise.then(function(response) {
//     console.log(response);
// }, function(error) {
//     console.log(error);
// });