function messageFirst() {
  setTimeout(function () {
    document.getElementById("content").innerHTML = "Hello world";
    //let a = document.getElementById("content");
    // a.style.display
    // return("Hello world");
  }, 2000);
}
function api(){

  a.open(GET,"//api.icndb.com/jokes/random",false);
  document.getElementById("joke").innerHTML = "aaa";
}
function eventRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
  xhttp.onreadystatechange = function(event) {
    var response = JSON.parse(event.target.response);
    document.getElementById('joke').innerHTML = response.value.joke;
     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
           document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
       }
     }
   }
 xhttp.send();
  }
