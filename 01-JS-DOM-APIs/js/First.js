function messageFirst() {
  setTimeout(function () {
    document.getElementById("content").innerHTML = "Hello world";
    //let a = document.getElementById("content");
    // a.style.display
    // return("Hello world");
  }, 2000);
}

function buttonClick(){
 var config = {
   url: 'http://api.icndb.com/jokes/random'
};
 function resolve(xhttp) {
     var response = JSON.parse(event.target.response);
     document.getElementById('joke').innerHTML = response.value.joke;
     if (xhttp.readyState === XMLHttpRequest.DONE)
       {
         if (xhttp.responseText.value)
           {
             document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
           }
       }
};
 function reject() { };
 eventRequestReusable(config).then(resolve,reject);

};
function eventRequestReusable(object, resolve, reject) {
 return new Promise( function (resolve, reject) {
 var xhttp = new XMLHttpRequest();
 xhttp.open('GET', object.url , true);
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
};
