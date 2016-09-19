// exercise 4
function fadeIn(){
    document.addEventListener("DOMContentLoaded", function(){
        let sections = document.querySelectorAll("section.hidden-section");
        for (var i = 0; i < sections.length; i++) {
            sections[i].classList.add("shown");
        }
    });
}

// exercise 6
function getJoke() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText).value.joke;
        // how about appendChild instead of innerHTML?
        document.querySelector("p.joke").innerHTML = "";
        document.querySelector("p.joke").innerHTML += response;
    }
  };
  xhr.open("GET", "http://api.icndb.com/jokes/random", true);
  xhr.send();
}
