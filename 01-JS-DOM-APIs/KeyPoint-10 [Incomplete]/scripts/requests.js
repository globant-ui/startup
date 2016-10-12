function getRequestJoke(){
  let configJokes = new configAjax("GET", "http://api.icndb.com/jokes/random", true);
  request(configJokes).then(function(response) {
    document.getElementById("changeclass").innerHTML = response.slice(
      response.search("joke") + 7,
      response.search("categories") - 3);
  }, function(error) {
    //When a server error occurs show section content in red.
    document.getElementById("changeclass").innerHTML =
      document.getElementById("changeclass").innerHTML.fontcolor("red");
  });
}

//AUN NO ENTENDÍ LO DEL LOG
function getRequestReposGit(){
  let configReposGit = new configAjax('GET', 'https://api.github.com/search/repositories?q=javascript', true);
  request(configReposGit).then(function(response) {
    //document.write(response);
    alert(response);
  }, function(error) {
    alert(error);
  });
}
