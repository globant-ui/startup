document.getElementById("btn").addEventListener("click", function ()

  {
    let xmlhttp = new XMLHttpRequest();
    let url = "https://api.github.com/search/repositories?q=";
    var parameter = document.getElementById('q').value;

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        let repo = JSON.parse(this.responseText);
        repo_array = repo.items;

        for (rkey = 0; rkey < repo_array.length; rkey++) {  
          console.log(repo_array[rkey].name);
          var li = document.createElement('LI');
          li.innerHTML = repo_array[rkey].name;
          document.getElementById('repo_list').appendChild(li);
        };
      }
    };
    xmlhttp.open("GET", url + parameter, true);
    xmlhttp.send();
  });
/* 

-------->I had made the process of deleting the items in the list more complex.<-------

document.getElementById("reset").addEventListener("click", function (){

  let xmlhttp = new XMLHttpRequest();
  let url = "https://api.github.com/search/repositories?q=";
  var parameter = document.getElementById('q').value;

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let repo = JSON.parse(this.responseText);
      repo_array = repo.items;
      
      for (rkey = 0; rkey < repo_array.length; rkey++) {  
        var ultimo = document.getElementById('repo_list').name;
        console.log(ultimo);
        document.getElementById('repo_list').removeChild(ultimo);
      };
    }
  };
  xmlhttp.open("GET", url + parameter, true);
  xmlhttp.send();

});
*/

/*
-------->This is the most practical solution to implement<-------
*/
document.getElementById("reset").addEventListener("click", function (){
var myList = document.getElementById('repo_list');
myList.innerHTML = '';
var input_text = document.getElementById('q');
q.value='';
});