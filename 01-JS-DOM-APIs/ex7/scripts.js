function getApiResponse(config){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", config.url, config.async);
        xhr.onload = function (){
            if (xhr.status == 200){
                resolve(JSON.parse(xhr.responseText).value.joke);
            }
            else {
                reject(Error(xhr.statusText));
            }
        }
        xhr.onerror = function() {
            reject(Error("network error"));
        }
        xhr.send();
    });
}

function callAJAX(){
    getApiResponse({url: "http://api.icndb.com/jokes/random", async: true}).then(function(response) {
        document.querySelector("p.joke").innerHTML = "";
        document.querySelector("p.joke").appendChild(document.createTextNode(response));
        console.log(response);
    }, function(error) {
        console.error("Failed!", error);
    });
}
