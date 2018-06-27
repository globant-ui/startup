
function fadeIn(element) {
  let op = 0.1;
  let timer = setInterval(function () {
    if (op >= 0.1){
      element.style.visibility = "visible";
    }
    if (op >= 1){
      element.style.visibility = "visible";
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.3;
  }, 10);
}

let section = document.getElementById("hiddenSection");
window.onload = function () {
  fadeIn(section)
}

document.getElementById("btn").addEventListener("click", function(){
  let xmlhttp = new XMLHttpRequest();
  let url = "http://api.icndb.com/jokes/random";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let joke = JSON.parse(this.responseText);
      section.innerHTML = joke.value.joke;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
});
