'use strict';
window.addEventListener('DOMContentLoaded', (event) => {
  var hidden_section = document.querySelector('.hidden-section');
  //Joke API
  var button = document.querySelector('.alert-button').addEventListener('click', getJoke);
  //Reusable code
  //var button = document.querySelector('.alert-button').addEventListener('click', reusableFunction);

  var config = {
    'url' : 'http://apti.icndb.com/jokes/random' 
  };

  hidden_section.classList.add('hidden-section-show');

  function getJoke(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      hidden_section.innerHTML = JSON.parse(xhttp.responseText).value.joke;
    }
  };
  xhttp.open("GET", 'http://api.icndb.com/jokes/random', true);
  xhttp.send();
  }

  function reusableFunction(config){
    fetch(config.url)
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      hidden_section.classList.add('error-section');
      hidden_section.innerHTML = 'A server error has occurred.';
    })
  }


});