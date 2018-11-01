
$(document).ready(function(){ 
    var chuckNorris = "https://api.icndb.com/jokes/random ";
    $("button ").on("click ", function()
    {
      $("button ").html("<h1>Again!!</h1>");
      $.getJSON(chuckNorris, function(json) 
    { 
      $("#quote").html("<h2>\""+json.value.joke+"\"</h2>"); 
    }); 
    }); 
    });
    