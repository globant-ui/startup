function show(){
                let obj = document.getElementById("hidden");
                if(obj.style.display == "block")
                        obj.style.display = "none";
                else
                        obj.style.display = "block";
                      }

function eventRequest() {
                        let xhttp = new XMLHttpRequest();
                        xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
                        xhttp.onreadystatechange = function(event) {
                          let response = JSON.parse(event.target.response);
                          document.getElementById("hidden").innerHTML = response.value.joke;
                           if (xhttp.readyState === XMLHttpRequest.DONE) {
                             if (xhttp.responseText.value) {
                                 document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
                             }
                           }
                       }
                      xhttp.send();
                    }

function eventOnClick(){
  let config = {
    url: 'http://api.icndb.com/jokes/random'
  };

  let xhttp = new XMLHttpRequest();

  function resolve(xhttp) {

     let response = JSON.parse(event.target.response);

      document.getElementById("hidden").innerHTML = response.value.joke;

      if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.responseText.value) {
          document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
        }
      }
  }

  function reject() {
     document.getElementById("hidden").style.backgroundColor="red";
  }

  eventRequestReusable(config).then(resolve,reject);
};

function eventRequestReusable(object, resolve, reject) {
  let promise = new Promise( function (resolve, reject) {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", object.url , true);
    xhttp.send();
    xhttp.onload = function () {
      if (this.status == 200) {
        resolve(xhttp);
      } else {
        reject(this.statusText);
      }
    };
    xhttp.onerror = function () {
     reject(this.statusText);
    };
  });
  return promise;
};

/*Ejercicio 9*/
function eventRequest2() {
                        let xhttp = new XMLHttpRequest();
                          var param = "q='javascript'";
                        xhttp.open("GET", "https://api.github.com/search/repositories", true);
                        xhttp.onreadystatechange = function(event) {
                          let response = JSON.parse(event.target.response);
                          let urlgit = new XMLHttpRequest();
                          document.getElementById("hidden2").innerHTML = response.documentation_url;
                           if (xhttp.readyState === XMLHttpRequest.DONE) {
                             if (xhttp.responseText) {
                                 document.getElementById("buttonSection").innerHTML  = xhttp.responseText.documentation_url;
                             }
                           }
                       }
                      xhttp.send();
                    }
