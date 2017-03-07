function fadeIn() {
  document.getElementById("oculto").style.visibility="visible";
  document.getElementById("oculto").style.display="block";
  document.getElementById("oculto").style.opacity = "0.5";
};

function configObject (metodo, url){
  var object = {};
  object.metodo = metodo;
  object.url = url;
  return object;
}

function makeRequest(object) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(object.metodo, object.url);
    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(xhr.response);
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

function readJokes(){
  let obj = configObject('GET', 'http://api.icndb.com/jokes/random');
  makeRequest(obj).then(
    function(value){       
      let parseValue = JSON.parse(value);
      document.getElementById('icndbmessage').innerHTML = parseValue.value.joke;},
    function(reason){
      document.getElementById('icndbmessage').innerHTML = "error 404";
      document.getElementById('oculto').style = "color:red";}
  );
};

function searchinaRepository(input) {
  let obj = configObject('GET', 'https://api.github.com/search/repositories?q='+input);
  makeRequest(obj).then(
    function(value){
      let parseValue = JSON.parse(value);
      console.log(parseValue.items);
      for (let i = parseValue.items.length - 1; i >= 0; i--) {
        let elementList = document.createElement('li');
        let name = document.createTextNode(parseValue.items[i].full_name);
        elementList.appendChild(name);
        document.getElementById('lista').appendChild(elementList);
      }},
    function(reason) {
      // do nothing
  });
}

/*xmlhttprequest whitout promise

function get_icndbResponse(url){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("icndbmessage").innerHTML = xhttp.responseText;
    };
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.send();
};*/