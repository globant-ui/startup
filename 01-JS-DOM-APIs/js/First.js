function messageFirst() {
  setTimeout(function () {
    document.getElementById("content").innerHTML = "Hello world";
    //let a = document.getElementById("content");
    // a.style.display
    // return("Hello world");
  }, 2000);
}
function git(){
  let config = {
    url: 'https://api.github.com/search/repositories'
  }
  eventsRequest(config);
}

function buttonClick(){
  let config = {
    url: 'http://api.icndb.com/jokes/random'
  }
  eventsRequest(config)
}
function eventsRequest(config){

  function resolve(xhttp) {
     var response = JSON.parse(event.target.response);
     document.getElementById('joke').innerHTML = response.value.joke;
    //  if (xhttp.readyState === XMLHttpRequest.DONE){
    //    if (xhttp.responseText.value){
    //          document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
    //     }
    //   }
    }

  function resolveA(xhttp) {
     var response = JSON.parse(event.target.response);
     console.log("resolvea");
     document.getElementById('joke').innerHTML = response.errors[0].field;
   }

   function reject() {
     document.getElementById("sec").style.border = "3px solid red";
   }

   api(config).then(resolve, resolveA, reject);

};
function api(object, resolve, resolveA, reject) {
   return new Promise( function (resolve, resolveA, reject) {
   let xhttp = new XMLHttpRequest();
   xhttp.open('GET', object.url , true);
   console.log(xhttp);
   xhttp.send();
   xhttp.onload = function () {
     if (this.status == 200) {
       resolve(xhttp);
       console.log("aaa");
     } else {
       if(this.status == 422){
         console.log("if");
         resolveA(xhttp);
       }
       else{
         reject(this.statusText);
      }
     }
   };
   xhttp.onerror = function () {
     reject(this.statusText);
   };
  })
};
