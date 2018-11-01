document.getElementById("btn").addEventListener("click", function () 

{
      

  let xmlhttp = new XMLHttpRequest();
  let url = "https://api.github.com/search/repositories?q=JavaScript";

      xmlhttp.onreadystatechange = function () 
      {
        if (this.readyState == 4 && this.status == 200) 
        {

          let repo = JSON.parse(this.responseText);
          var repo_array = repo.items;
          for (rkey = 0; rkey < repo_array.length; rkey++) 
          {
            console.log(repo_array[rkey].name);

            var li=document.createElement('LI');
            li.innerHTML=repo_array[rkey].name;
            document.getElementById('repo_list').appendChild(li);
   
          };
        }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
});


 