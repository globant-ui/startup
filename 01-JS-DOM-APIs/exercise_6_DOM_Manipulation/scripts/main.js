'use strict';
window.addEventListener('DOMContentLoaded', (event) => {
  var hidden_section = document.querySelector('.hidden-section');
  var users = [
    [1, 'Peter'],
    [2, 'Bob_93'],
    [3, 'Susan'], 
    [4, 'Edward'], 
    [5, 'John'], 
    [6, 'Anonymous_User']
  ];
  
  hidden_section.classList.add('hidden-section-show');

  function print2DArray(users){
    var table_body = document.getElementsByTagName('tbody')[0];
    
    for(var i = 0; i<users.length; i++){
      var tr = document.createElement('tr');
      var tdId = document.createElement('td');
      var tdUser = document.createElement('td');
      var userId = document.createTextNode(users[i][0]);
      var name = document.createTextNode(users[i][1]);
      tdId.appendChild(userId);
      tdUser.appendChild(name);
      tr.appendChild(tdId);
      tr.appendChild(tdUser);
      table_body.appendChild(tr);
      console.log(users[i][0]);
      console.log(users[i][1]);
    }

  }
  print2DArray(users);

});