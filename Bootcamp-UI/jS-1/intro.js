function sectionFadeIn() {
  document.getElementById("section1").style.visibility = "visible"
}

function alertMessage(){
  alert("This is an alert!");
}

function GetProm(set){

  return new Promise(function(succeed,fail){

		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
	    	if (this.readyState == 4 && this.status == 200){
	       		succeed(req.responseText);
	       	}
	       	if(this.readyState === XMLHttpRequest.DONE && this.status != 200){
	       		fail("Error")
	       	}
		};

		req.open(set.method, set.url, set.sync);
    req.addEventListener("load", function() {
    console.log("Status:",req.status);
    if(req.status==200)
    {
      console.log("OK!");
      }
    });
		req.send();
	});
}

function randomJoke(){

	var set = {method:"GET", url:"http://api.icndb.com/jokes/random", sync:true};
	var promise = GetProm(set);

	promise.then
  (function(succeed2)
  {
		document.getElementById("jokesec").innerHTML = JSON.parse(succeed2).value.joke;
	},
   function(fail2)
   {
		document.getElementById("jokesec").style.background = "red";
		document.getElementById("jokesec").innerHTML = fail2;
	});
}

function getRepos(){

	var Search = document.getElementById("Searchtxt").value;

	var set = {method:"GET", url:"https://api.github.com/search/repositories?q=" + Search, sync:true};

	var promise = GetProm(set);

	promise.then(function(content){

		var list = "<ul>";
		for(var i in JSON.parse(content).items){
			 list = list + "<hr>" + "<li>" + "<a href=>" + JSON.parse(content).items[i].html_url + "</a>" + "</li>" + "<hr>" ;
		}
		list = list + "</ul>";

		document.getElementById("repoList").innerHTML = list;

	}, function(error){
		document.getElementById("repoList").style.background = "red";
		document.getElementById("repoList").innerHTML = error;
	});
}
