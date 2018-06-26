const xhttp = new XMLHttpRequest();
const el = document.querySelector('.js-fade');

if (el.classList.contains('is-paused')) {
  el.classList.remove('is-paused');
}

const callData = () => {
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("show").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.send();
}