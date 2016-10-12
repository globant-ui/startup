// exercise 6
function show(){
    let obj = document.getElementById("hidden");
    obj.style.visibility ="visible";
}

function joke() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.onreadystatechange = function(event) {
    let response = JSON.parse(event.target.response);
    document.getElementById("hidden").innerHTML = response.value.joke;
     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
           document.getElementById("hidden").innerHTML  = xhttp.responseText.value.joke;
       }
     }
   }
 xhttp.send();
}


// exercise 7
function eventOnClick(){
 let config = {
   url: "http://api.icndb.com/jokes/random"
 }

 let xhttp = new XMLHttpRequest();

 function resolve(xhttp) {

    let response = JSON.parse(event.target.response);

     document.getElementById("hidden").innerHTML = response.value.joke;

     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
         document.getElementById("hidden").innerHTML  = xhttp.responseText.value.joke;
       }
     }
 }

 function reject() {
   //exercise 8
   let obj = document.getElementById("hidden");
   obj.style.color ="red";
 }

 eventRequestReusable(config).then(resolve,reject);
}

function eventRequestReusable(object, resolve, reject) {
 let promise = new Promise( function (resolve, reject) {
   let xhttp = new XMLHttpRequest();

   xhttp.open("GET", object.url , true);
   xhttp.send();
   xhttp.onload = function () {
     if (this.readyState ===4 && this.status === 200) {
       resolve(xhttp);
     } else {
       reject(this.statusText);
     }
   };
   xhttp.onerror = function () {
    reject(this.statusText);
   }
 })
 return promise;
}




// exercise 9


function javaShow() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.github.com/search/repositories", true);
  xhttp.onreadystatechange = function(event) {
    let response = JSON.parse(event.target.response);
    //let gitDeveloper = new XMLHttpRequest();
    //let urlGit = response.errors[0].field;
    document.getElementById("javashows").innerHTML  = xhttp.response.errors[0].field;
     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.documentation_url) {
          // let urlGit  = xhttp.responseText.errors[0].field;
          document.getElementById("javashows").innerHTML  = xhttp.responseText.errors[0].field;
       }
     }
     gitDeveloper.open("GET", urlGit , true);

   }
 xhttp.send();


}
