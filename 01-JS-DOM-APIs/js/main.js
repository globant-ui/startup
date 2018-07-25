window.onload = function() {
  var section = document.getElementById('hidden');
  section.style.opacity = "1";

  // Events - Listeners
  document.getElementById('joke-button').addEventListener("click", random_joke3, false);
  document.getElementById('repo-button').addEventListener("click", search_repositories, false);
  document.getElementById('repo-search').addEventListener("submit", search_repositories2, false);
  document.getElementById('table-button').addEventListener("click", create_table, false);
}

function random_joke() {
  const joke = document.getElementById('joke');
  const url = "http://api.icndb.com/jokes/random";

  fetch(url)
  .then( (resp) => resp.json()) 
  .then(function(data) {
    const joke_details = data.value;
    joke.innerHTML = joke_details.joke;
  })
  .catch(function(error) { //Just in case the API has any trouble.
    console.log(error);
  })
}

// Exercise 6 -- Alternative with XMLHttpRequest
function random_joke2() {
  const url = "http://api.icndb.com/jokes/random";
  var myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () { 
    if (this.readyState === 4 && this.status == 200) {
      const json = JSON.parse(this.responseText);
      document.getElementById('joke').innerHTML = json.value.joke;
    } else if(this.status == 400) {
      alert("400 error");
    }
  };

  myRequest.open('GET', url);
  myRequest.send();
}

// Exercise 7

function random_joke3() {
  const joke = document.getElementById('joke');

  /* Now we create a config object, just as an example.*/
  const config = {
    url: "http://api.icndb.com/jokes/random"
  }
  /*Then we just delegate the responsability to the promise */
  get_http(config) //Get a promise
  .then(function (value) {
    joke.innerHTML = JSON.parse(value).value.joke;
  },
  function (reason) {
    joke.style.backgroundColor = "red";
    joke.innerHTML = "Something went wrong!!!";
  });
}

function get_http(config) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', config.url);
    request.send(); 
    request.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(this.responseText);
      } else if(this.status == 400 || this.status == 500) {
        reject(new Error(this.statusText));
      }
    };

    request.onerror = function () {
      reject(new Error(
        'XMLHttpRequest Error: ' + this.statusText));
    };   
  });
}

// Exercise 9
function search_repositories(){
  const config = {
    url: "https://api.github.com/search/repositories?q='JavaScript'"
  }

  get_repositories(config);
}

function get_repositories(config){

  get_http(config)
  .then(function(value) {
    generate_list(value);
  }),
  function(reason) {
    alert("There was a problem!");
  }
}

function generate_list(response) {

  document.getElementById("repositories").innerHTML = ""; // Empty the div before filling it again.
  const items = JSON.parse(response).items;

  items.forEach(function(item) {
    create_list_item(item);
  });
}

function create_list_item(item) {
  const paragraph = document.createElement("P");                  
  const text = document.createTextNode(item.full_name);
  paragraph.appendChild(text);                                       
  document.getElementById("repositories").appendChild(paragraph); 
  const ul = document.createElement("UL");
  paragraph.appendChild(ul);
  
  for(let property in item){
    create_ul_elements(property, item[property], ul);
  }
}

function create_ul_elements(property, value, father) {
  const list_item = document.createElement("LI");                  
  const text = document.createTextNode(property + ": " + value);
  list_item.appendChild(text);                                         
  father.appendChild(list_item); 
}

// Exercise 10
function search_repositories2(form){
  form.preventDefault();
  const input = document.getElementById("searchParameter").value;
  const config = {
    url: "https://api.github.com/search/repositories?q='" + input + "'"
  }
  get_repositories(config);
}

//Exercise 12

function create_table(){
  let table = [
  ["Movie title", "$$$", "Main Character", "Like | Dislike"],
  ["Titanic", "3 Billon U$D", "Brad Pitt", "Like"],
  ["Jaws", "1 Billon U$D", "A shark", "No comments"],
  ["Star Wars", "3 TRILLON!!", "Rey", "Super - Like"]
  ]
 // Warning: the matrix must be NxN. 
  create_table_elements(table);
}

function create_table_elements(table){

  const t = document.createElement("TABLE");

  for(let i=0; i < table.length; i++){
    const row = document.createElement("TR");
    for(let j=0; j < table.length; j++){
      const column = document.createElement("TD");
      const text = document.createTextNode(table[i][j]);
      column.appendChild(text);
      row.appendChild(column);
    }
    t.appendChild(row);
  }

  document.getElementById("table").appendChild(t);
}