function fadeIn() {
  document.getElementById("oculto").style.visibility="visible";
  document.getElementById("oculto").style.display="block";
  document.getElementById("oculto").style.opacity = "0.5";
};

function makeRequest(method, url, showId) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(document.getElementById(showId).innerHTML = xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
};




/*
xmlhttprequest whitout promise

function get_icndbResponse(url){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("icndbmessage").innerHTML = xhttp.responseText;
    };
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.send();
};

*/