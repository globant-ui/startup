function createMatrix(){
  let link="https://api.github.com/search/repositories?q=javascript";
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
      let table = document.getElementById("table");
      table.setAttribute("border", "1");
      let data = config.items;
      console.log(data);
      for(let i=0; i < data.length; i++){
          let row = document.createElement("tr");
          let text = document.createElement("td");
          let textContent = document.createTextNode(data[i].full_name);
          text.appendChild(textContent);
          let url = document.createElement("a");
          let urlText = document.createTextNode(data[i].html_url);
          url.appendChild(urlText);
          url.href = data[i].html_url;
          row.appendChild(text);
          row.appendChild(url);
          table.appendChild(row);
      }
}



function promiseFailed(){
      let list = document.getElementById("list");
      list.style.background = "red";
      console.log("error");
}
