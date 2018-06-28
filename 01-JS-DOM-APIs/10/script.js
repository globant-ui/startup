
let fillUl = function (uList, array){
  uList.innerHTML = '';
  for (let i = 0; i < array.length; i++ ) {
    let item = document.createElement("li");
    item.innerHTML = array[i].full_name;
    uList.appendChild(item);
  }
}

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

document.getElementById("btn").addEventListener("click", function(){
  let showSearch = function(data){
    console.log(data);
    let list = document.getElementById("searchList");
    fillUl(list, data.items);
  }
  let config = new Object();
  let searchTerm = document.getElementById("searchInput").value;
  config.url = "https://api.github.com/search/repositories?q=" + searchTerm;
  config.callback = showSearch;

  getFetch(config);
});
