function messageFirst () {
  setTimeout(function () {
    document.getElementById("content").innerHTML = "Hello world";
  }, 2000);
};

function buttonClick () {
  let config = {
    url: 'http://api.icndb.com/jokes/random',
    method: 'GET',
    asy: true
  };

  function resolve () {
    document.getElementById("sec").style.border = "3px solid blue";
    let response = JSON.parse(event.target.response);
    document.getElementById('joke').innerHTML = response.value.joke;
  };

  function reject () {
    alert("An error has ocurred, please try again");
    document.getElementById("sec").style.border = "3px solid red";
  };

  ajaxCall(config).then(resolve, reject);
};

function git () {
  let searchField = document.getElementById("searchField").value;
  let config = {
    url: 'https://api.github.com/search/repositories?q=' + searchField,
    method: 'GET',
    asy: true
  };

  function resolve (request) {
    let list = document.getElementById("list");
    let response = JSON.parse(request.response);
    let newLine, data;
    document.getElementById("sec").style.border = "3px solid blue";
    list.innerHTML = "";
    response.items.map(function (item) {
     newLine = document.createElement("li");
     data = document.createTextNode(item.full_name);
     newLine.appendChild(data);
     list.appendChild(newLine);
   });
 };

  function reject () {
    alert("An error has ocurred, please try again");
    document.getElementById("sec").style.border = "3px solid red";
  }
  ajaxCall(config).then(resolve,reject);
};

function ajaxCall (urlConfig) {
  return new Promise( function (resolve, reject) {
    let xhttp = new XMLHttpRequest ();
    xhttp.open(urlConfig.method, urlConfig.url , urlConfig.asy);
    xhttp.send();
    xhttp.onload = function (event) {
      if (this.status == 200) {
        resolve(xhttp);
        } else {
        reject();
      }
    }
    xhttp.onerror = function () {
      document.getElementById("sectionHidden").style.backgroundColor = "red";
      reject();
    }
  });
}
