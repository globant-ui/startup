window.onload = function() {
  var section = document.getElementById('hidden');
  section.style.opacity = "1";
}

function random_joke() {
  let joke = document.getElementById('joke');
  const url = "http://api.icndb.com/jokes/random";

  fetch(url)
  .then( (resp) => resp.json()) 
  .then(function(data) {
    let joke_details = data.value;
    joke.innerHTML = joke_details.joke;
  })
  .catch(function(error) { //Just in case the API has any trouble.
    console.log(error);
  })
}

// Alternative with XMLHttpRequest
function random_joke2() {
  let url = "http://api.icndb.com/jokes/random";
  var myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () { 
    if (this.readyState === 4 && this.status == 200) {
      let json = JSON.parse(this.responseText);
      document.getElementById('joke').innerHTML = json.value.joke;
    } else if(this.status == 400) {
      alert("400 error");
    }
  };

  myRequest.open('GET', url);
  myRequest.send();
}

// Exercise 7 -- Still testing | Does not work.

function random_joke3() {
  let joke = document.getElementById('joke');

  /* Now we create a config object, just as an example.*/
  let config = {
    url: "http://api.icndb.com/jokes/random"
  }

  /*Then we just delegate the responsability to the promise */
  get_http(config) //Get a promise
  .then(function (value) {
    joke.innerHTML = JSON.parse(value).value.joke;
  },
  function (reason) {
    console.error('Something went wrong!!!', reason);
  });
}

function get_http(config) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', config.url);
    request.send(); 
    request.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        console.log("BEFORE:" + this.responseText);
        resolve(this.responseText);
      } else if(this.status == 400) {
        reject(new Error(this.statusText));
      }
    };

    request.onerror = function () {
      reject(new Error(
        'XMLHttpRequest Error: '+this.statusText));
    };   
  });
}

