function fade() {
  setTimeout(function () {
    document.getElementById("fade-in").style.transition = "all 4s ease-out";
    document.getElementById("fade-in").style.opacity = 1;
  }, 3000);
}

document.getElementById("button-get-repositories").addEventListener("click", function() {
  document.getElementById("status").innerHTML = "";
  document.getElementById("repositories-list").innerHTML = "";
  var config = {};
  config.method = "GET";
  config.url = "https://api.github.com/search/repositories";
  config.async = true;
  config.params = { q: "JavaScript" };
  // We define what to do when the promise is resolved/fulfilled with the then() call,
  // and the catch() method defines what to do if the promise is rejected.
  performAJAXCall(config).then(
    function(val) {
      val = JSON.parse(val);
      for(var key in val.items) {
        var node = document.createElement("li");
        var textNode = document.createTextNode(val.items[key].full_name);
        node.appendChild(textNode);
        document.getElementById("repositories-list").appendChild(node);
      }
    })
  .catch(
    // Log the rejection reason
    function(reason) {
      document.getElementById("fade-in").style.color = "red";
      var node = document.createElement("p");
      var textNode = document.createTextNode("Error: " + reason);
      node.appendChild(textNode);
      document.getElementById("fade-in").appendChild(node);
      console.log("Error: " + reason);
    });
});

function performAJAXCall(config) {
  return new Promise(function (resolve, reject) {
    var uri = getURI(config["url"], config["params"]);
    var xhr = new XMLHttpRequest();
    xhr.open(config["method"], uri, config["async"]);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject("Service not available: " + xhr.statusText);
      }
    };

    xhr.onerror = function () {
      reject("Network failure");
    };

    xhr.send();
  });
}

function getURI(url, args) {
  var uri = url;
  if (args) {
    uri += '?';
    var argcount = 0;
    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        if (argcount++) {
          uri += '&';
        }
        uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
      }
    }
  }
  return uri;
}
