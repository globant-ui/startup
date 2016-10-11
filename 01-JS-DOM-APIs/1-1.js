function show() {
  let obj = document.getElementById("hidden");
  obj.style.display = "block";
}

function joke() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.onreadystatechange = function(event) {
    let response = JSON.parse(event.target.response);
    document.getElementById("sectionJoke").innerHTML = response.value.joke;
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.responseText.value) {
        document.getElementById("buttonJoke").innerHTML  = xhttp.responseText.value.joke;
        }
      }
    }
    xhttp.send();
}

function ajaxcall(){
    let config = {
      url: "http://api.icndb.com/jokes/random"
    };
    function resolve(xhttp) {
      let response = JSON.parse(event.target.response);
      document.getElementById("sectionAjax").innerHTML = response.value.joke;
      if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.responseText.value) {
          document.getElementById("buttonAjax").innerHTML  = xhttp.responseText.value.joke;
        }
      }
    };
    function reject() {
       document.getElementById("hidden").style.backgroundColor="red";
    };
    requestreusable(config).then(resolve,reject);
  };

function requestreusable(object, resolve, reject) {
  return new Promise( function (resolve, reject) {
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
  })
}

function Qsearch() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.github.com/search/repositories", true);
  xhttp.onreadystatechange = function(event) {
    let response = JSON.parse(event.target.response);
    document.getElementById("sectionQSearch").innerHTML = response.value.joke;
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.responseText.value) {
        document.getElementById("buttonQSearch").innerHTML  = xhttp.responseText.value.joke;
        }
      }
    }
    xhttp.send();
}
