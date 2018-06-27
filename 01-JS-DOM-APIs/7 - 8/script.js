
function fadeIn(element) {
  let op = 0.1;
  let timer = setInterval(function () {
    if (op >= 0.1){
      element.style.visibility = "visible";
    }
    if (op >= 1){
      element.style.visibility = "visible";
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.3;
  }, 10);
}

let section = document.getElementById("hiddenSection");
window.onload = function () {
  fadeIn(section)
}

document.getElementById("btn").addEventListener("click", function(){
  let showJoke = function(data){
      document.getElementById('joke').innerHTML = data.value.joke;
    }
    let config = new Object();
    config.url = "http://api.icndb.com/jokes/random";
    config.callback = showJoke;

    getFetch(config);
});

function getXhr(config) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", config.url, true);
    req.addEventListener("load", function() {
      if (req.status == 200){
        succeed(req.responseText);
        config.callback(JSON.parse(req.responseText));
      }
      else{
        fail(new Error("Status Code: " + req.statusText));
        document.getElementById('joke').innerHTML = "Server error: " + req.statusText;
        document.getElementById('joke').style.color = "red";
      }
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}

function getFetch(config){
  fetch(config.url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Status Code: ' + response.status);
        document.getElementById('joke').innerHTML = "Server error: " + req.statusText;
        document.getElementById('joke').style.color = "red";
        return;
      }
      response.json().then(function(data) {
        config.callback(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Network error', err);
  });
}
