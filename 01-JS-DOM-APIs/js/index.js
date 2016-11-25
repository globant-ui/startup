function fade() {
  setTimeout(function () {
    document.getElementById("fade-in").classList.add("fade-in");
  }, 2000);
}

document.getElementById("button-get-repositories").addEventListener("click", function() {
  let keyword = document.getElementById("keyword-repositories").value;
  let config;
  let node;
  let textNode;
  let repositoriesList;
  let key;
  let fadein;
  if (keyword !== "") {
    clearElements();
    config = {
      "method": "GET",
      "url": "https://api.github.com/search/repositories",
      "asynchronous": true,
      "params": { "q": keyword }
    };
    // We define what to do when the promise is resolved/fulfilled with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    performAJAXCall(config).then(
      function(value) {
        repositoriesList = document.getElementById("repositories-list");
        value = JSON.parse(value);

        for(key in value.items) {
          node = document.createElement("li");
          textNode = document.createTextNode(value.items[key].full_name);
          node.appendChild(textNode);
          repositoriesList.appendChild(node);
        }
      })
    .catch(
      // Log the rejection reason
      function(reason) {
        fadein = document.getElementById("fade-in");
        fadein.style.color = "red"
        node = document.createElement("p");
        textNode = document.createTextNode("Error: " + reason);
        node.appendChild(textNode);
        fadein.appendChild(node);
        console.log("Error: " + reason);
      });
  } else {
    document.getElementById("search-status").innerHTML = "Please enter a keyword.";
  }
});

function performAJAXCall(config) {
  let uri;
  let xhr;
  return new Promise(function (resolve, reject) {
    uri = getURI(config.url, config.params);
    xhr = new XMLHttpRequest();
    xhr.open(config.method, uri, config.async);
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
  let uri = url;
  let argcount;
  let key;
  if (args) {
    uri += '?';
    argcount = 0;
    for (key in args) {
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

function clearElements() {
  document.getElementById("status").innerHTML = "";
  document.getElementById("repositories-list").innerHTML = "";
  document.getElementById("search-status").innerHTML = "";
}
