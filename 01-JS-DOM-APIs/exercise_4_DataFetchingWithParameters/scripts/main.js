'use strict';
window.addEventListener('DOMContentLoaded', (event) => {
  var hidden_section = document.querySelector('.hidden-section');
  var button = document.querySelector('.alert-button').addEventListener('click', getData);
  var button_input = document.querySelector('.button-input').addEventListener('click', filterItems);
  hidden_section.classList.add('hidden-section-show');

  function getData(){
    var xhttp = new XMLHttpRequest();
    var search_bar = document.querySelector('.search-bar'); 
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        for(var i = 0; i<response.items.length; i++){
          console.log(response.items[i].full_name);
          console.log(response.items[i].html_url);
          var repo_list = document.querySelector('.repository-item');
          var li = document.createElement('li');
          var repo_item = document.createTextNode(response.items[i].full_name);
          li.appendChild(repo_item);
          repo_list.appendChild(li);
        }
        search_bar.classList.add('show-search-bar');
    }
  };
  xhttp.open("GET", 'https://api.github.com/search/repositories?q=JavaScript ', true);
  xhttp.send();
  }

  function filterItems(){
    var inputContent = document.querySelector('.input-search-value').value;
    
    deletePreviousElements();
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        for(var i = 0; i<response.items.length; i++){
          console.log(response.items[i].full_name);
          console.log(response.items[i].html_url);
          var repo_list = document.querySelector('.repository-item');
          var li = document.createElement('li');
          var repo_item = document.createTextNode(response.items[i].full_name);
          li.appendChild(repo_item);
          repo_list.appendChild(li);
        }
    }
  };
  xhttp.open("GET", 'https://api.github.com/search/repositories?q=' + inputContent, true);
  xhttp.send();
  }

  function deletePreviousElements(){
    var element = document.querySelector('.repository-item');
    while (element.hasChildNodes()) {   
    element.removeChild(element.firstChild);
  }
  }
});