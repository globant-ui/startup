function searchRepo(){
  let searchGH = document.getElementById("searchRepo").value;
  let link="https://api.github.com/search/repositories?q=" + searchGH;
  let config = {
    method:"GET",
    url: link,
    async: "true",
  }
    callAjax(config).then(promiseFulfilled,promiseFailed);
}

function callAjax(config){
    let promise = new Promise (function (resolve, reject){
    let request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    }
      request.open(config.method,config.url,config.async);
      request.send(null);
      request.onreadystatechange = function(){
      if (request.readyState == 4) {
        if (request.status == 200) {
          let response = JSON.parse(request.responseText);
          resolve(response);
        } else {
          reject(request.status);
        }
      } else {
        console.log("processing request");
      }
    }
  });
  return promise;
}
function promiseFulfilled(config){
      let data = config.items;
      console.log(data);
      if(data.length == 0){
        let list = document.getElementById("list");
        list.innerHTML="No matches found!";
        list.style.background="#EE7777";
      }else{
        for(let repo of config.items) {
          let list = document.getElementById("list");
          let newRepo = document.createElement("li");
          newRepo.innerHTML = repo.full_name;
          list.appendChild(newRepo);
        }
      }
}

function promiseFailed(){
      let list = document.getElementById("list");
      list.style.background = "red";
      console.log("error");
}
