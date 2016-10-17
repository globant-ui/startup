//1-4
function show(){
  let hiddenObj = document.getElementById("idHidden");
  let buttonJokeshow = document.getElementById("buttonShow");
  if(hiddenObj.className === "hidden"){
  hiddenObj.className = "showhidden"
    buttonJokeshow.value= "Show";
  }
  else{
    hiddenObj.className = "hidden"
    buttonJokeshow.value= "Hide";
  }
}
//5-6
function buttonJokeWithoutPromise() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.onreadystatechange = function(event) {
    if (xhttp.readyState === XMLHttpRequest.DONE)
    {
      let response = JSON.parse(event.target.response);
      document.getElementById("jokeHidden").innerHTML = response.value.joke;
      document.getElementById("buttonjoke").value="Another joke";
    }
  }
  xhttp.send();
}
//7-9
function buttonJokeWithPromise(){
  let config = {
    url: 'http://api.icndb.com/jokes/random',
    methodHttp: 'GET'
  };
  function resolve(xhttp) {
    let response = JSON.parse(event.target.response);
    document.getElementById("jokeHidden2").innerHTML = response.value.joke;
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.responseText.value) {
        document.getElementById("button2").innerHTML  = xhttp.responseText.value.joke;
      }
    }
  }
  function reject() {
    document.getElementById("all").className = "error404";
  }
   performRequest(config).then(resolve,reject);
  };

function  performRequest(requestObject, resolve, reject) {
  let promise = new Promise( function (resolve, reject) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(requestObject.methodHttp, requestObject.url , true);
    xhttp.send();
    xhttp.onload = function () {
      if (this.status === 200) {
        resolve(xhttp);
      }
      else {
        reject(this.statusText);
      }
    };
    xhttp.onerror = function () {
      reject(this.statusText);
    };
  });
  return promise;
};
//9-11
function configAjaxObj (methodHttp, url, asyncronic){
  var configAjaxObj = {};
  configAjaxObj.methodHttp = methodHttp;
  configAjaxObj.url = url;
  configAjaxObj.asyncronic = asyncronic;

 return configAjaxObj;
}

function githubRepo() {
 let objconfig =  configAjaxObj ("GET", "https://api.github.com/search/repositories?q="+document.getElementById("repoText").value, true);
  performRequest(objconfig).then(function(response) {
   let resp = JSON.parse(event.target.response);
   let listAppend = document.getElementById("list")
   for (var key = 0; key < resp.items.length; key++){
     var columnNode = document.createElement("li");
     var textNode = document.createTextNode(resp.items[key].full_name);
     columnNode.appendChild(textNode);
     listAppend.appendChild(columnNode);
   }
 },
 function(error) {
   document.getElementById("all").className = "error404";

 });
}
function clearList(){
  document.getElementById("list").innerHTML = "";
  document.getElementById("repoText").value = "";
  document.getElementById("all").className = "nonerror";
}

//12
function createMatrix(){
  matrix = [
    ['Michael','Brown','Germany', 'Soccer'],
    ['John','James','Island', 'Rugby'],
    ['Clark','Stewart','Ireland', 'Soccer'],
    ['Ben', 'Jones', 'United States','Tenis']
  ];
}

function importMatrixToDOM(matrix) {
  for(var indexTR = 0; indexTR < 4; indexTR++ ){
    var trNode = document.createElement("tr");
    for (var indexTD = 0; indexTD < 4; indexTD++) {
      var tdNode = document.createElement("td");
      var dataNode = document.createTextNode(matrix[indexTR][indexTD]);
      tdNode.appendChild(dataNode);
      trNode.appendChild(tdNode);
    }
    document.getElementById("dataTable").appendChild(trNode);
  }
}
