'use strict';
window.addEventListener('DOMContentLoaded', (event) => {
  var hidden_section = document.querySelector('.hidden-section');
  var button = document.querySelector('.alert-button').addEventListener('click', alertFunction);
  var config = {
    'url' : 'http://api.icndb.com/jokes/random' 
  };

  hidden_section.classList.add('hidden-section-show');

  function alertFunction(){
    alert('Hi there! :)');
    } 

});