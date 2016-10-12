function messageFirst() {
  setTimeout(function () {
    document.getElementById("content").innerHTML = "Hello world";
  }, 2000);
}

function buttonClick(){
  let config = {
    url: 'http://api.icndb.com/jokes/random'
  }
  function resolve(xhttp) {
    var response = JSON.parse(event.target.response);
    document.getElementById('joke').innerHTML = response.value.joke;
  }
  function reject(){

  }
  eventRequest(config).then(resolve, reject);
}

function git(){
  let searchField = document.getElementById("searchField").value;
  console.log(searchField);
  var config = {
    url: 'https://api.github.com/search/repositories?q=' + searchField
  }
  console.log(config.url);

  function resolve(xhttp) {
    console.log(xhttp.responseURL);
    document.getElementById("list").innerHTML = "";
    var response = JSON.parse(event.target.response);
    for (var i = 0; i < response.items.length; i++){
      var newLine = document.createElement("li");
      var data = document.createTextNode(response.items[i].full_name);
      newLine.appendChild(data);
        document.getElementById('list').appendChild(newLine);
   }
}

  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
  }
  eventRequest(config).then(resolve,reject);
}

function eventRequest(object, resolve, reject) {
  return new Promise( function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', object.url , true);
    xhttp.send();
    xhttp.onload = function () {
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
  })
}
