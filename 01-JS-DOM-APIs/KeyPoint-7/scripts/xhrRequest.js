// configAjax contains the method (GET, POST, PUT, DELETE), the url and a boolean for the async
function configAjax (methodHttp, url, asyncronic, params, headers){
  this.methodHttp = methodHttp;
  this.url = url;
  this.asyncronic = asyncronic;
  this.params = params;
  this.headers = headers
}

function request(configAjax) {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open(configAjax.methodHttp, configAjax.url, configAjax.asyncronic);
        req.onload = function() {
          if (req.status == 200) {
            resolve(req.response);
          }
          else {
            reject(Error(req.statusText));
          }
        };
        req.onerror = function() {

          reject(Error("Network Error"));
        };
        req.send(configAjax.params);
    });

}

function getRequestJoke(){
  let configJokes = new configAjax("GET", "http://api.icndb.com/jokes/random", true);
  request(configJokes).then(function(response) {
    document.getElementById("changeclass").innerHTML = response.slice(
      response.search("joke") + 7,
      response.search("categories") - 3);
  }, function(error) {
    alert(error);
  });
}
