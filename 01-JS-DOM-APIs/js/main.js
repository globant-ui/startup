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