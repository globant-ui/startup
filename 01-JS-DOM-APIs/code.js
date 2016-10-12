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
/*Ejercicio 7*/
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

function eventRequestReusable(object) {
  let promise = new Promise( function (resolve, reject) {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", object.url);
    xhttp.send();
    xhttp.onload = function () {
      if (this.status == 200) {
        resolve(xhttp.response);
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
function load () {
  console.log('load');
  let changeElement = document.getElementById("changeclass");
  changeElement.style.transition = "all 3s ease-in-out";
  changeElement.style.opacity = 1;
}

function configAjax (methodHttp, url, asyncronic){
  this.methodHttp = methodHttp;
  this.url = url;
  this.asyncronic = asyncronic;
}

function connect(inptext) {
  let objconfig = new configAjax("GET", "https://api.github.com/search/repositories?q="+inptext, true);
  eventRequestReusable(objconfig).then(function(response) {
    resp = JSON.parse(response);
    console.log(resp);
    for (var key = 0; key < resp.items.length; key++){
      var columnNode = document.createElement("li");
      var textNode = document.createTextNode(resp.items[key].full_name);
      columnNode.appendChild(textNode);
      document.getElementById("list").appendChild(columnNode);
    }
    }, function(error) {

      document.getElementById("changeclass").style.color = "red";
  });
}

function removeAll(){
    document.getElementById("list").innerHTML = "";
}
