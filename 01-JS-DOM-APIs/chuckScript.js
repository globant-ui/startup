/* version 1 without xmlhttpRequest and section background-color change when has a server-error.
$(document).ready(function(){ 
    var chuckNorris = "https://api.icndb.com/jokes/random ";
    $("button ").on("click ", function()
    {
      $("button ").html("<h1>Again!!</h1>");
      $.getJSON(chuckNorris, function(json) 
    { 
      $("#quote").html("<h2>\""+json.value.joke+"\"</h2>"); 
    }); 
    }); 
    });
  */

/* version 2 complete */

document.getElementById("btn").addEventListener("click", function () {
  let showJoke = function (data) {
    document.getElementById('chuck').innerHTML = data.value.joke;
  }
  let config = new Object();
  config.url = "http://api.icndb.com/jokes/random";
  config.callback = showJoke;
  getFetch(config);
});

function getXhr(config) {
  return new Promise(function (succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", config.url, true);
    req.addEventListener("load", function () {
      if (req.status == 200 && req.readyState ==4) {
        succeed(req.responseText);
        config.callback(JSON.parse(req.responseText));
      } else {
        fail(new Error("Status Code: " + req.statusText));
        document.getElementById('chuck').innerHTML = "Server error: " + req.statusText;
        document.getElementById('chuck').style.color = "red";
      }
    });
    req.addEventListener("error", function () {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}

function getFetch(config) {
  fetch(config.url)
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Status Code: ' + response.status);
          document.getElementById('chuck').innerHTML = "Server error: " + req.statusText;
          document.getElementById('chuck').style.color = "red";
          return;
        }
        response.json().then(function (data) {
          config.callback(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Network error', err);
    });
}