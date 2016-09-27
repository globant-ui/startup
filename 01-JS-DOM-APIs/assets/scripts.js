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
// function getJoke() {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         let response = JSON.parse(this.responseText).value.joke;
//         // how about appendChild instead of innerHTML?
//         document.querySelector("p.joke").innerHTML = "";
//         document.querySelector("p.joke").innerHTML += response;
//     }
//     else if (this.status >= 500 ) {
//         document.querySelector("section").style.color = 'red';
//     }
//   };
//   xhr.open("GET", "https://api.github.com/search/repositories", true);
//   xhr.send();
// }
//     let node = document.createElement("li");
    // let textNode = document.createTextNode(element.full_name);
    // node.appendChild(textNode);
    // document.getElementById("repo-list").appendChild(node);

function hitAPI() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var repositories = JSON.parse(this.responseText);
        useResponse(repositories);
    }
  };
  let query = document.getElementById("git-query").value;
  xhr.open("GET", "https://api.github.com/search/repositories?q=" + query, true);
  xhr.send();
}

function useResponse(array) {
    for(var i = 0; i < array.items.length; i++) {
        let node = document.createElement("li");
        let textNode = document.createTextNode(array.items[i].full_name);
        node.appendChild(textNode);
        document.getElementById("repo-list").appendChild(node);
    }
}
