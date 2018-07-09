function fadeIn() {
    var elementFade = document.getElementById("hidden");
    var opac = 0.1;
    elementFade.style.visibility=("visible");
    var timer = setInterval(function () {
        if (opac >= 1){
            clearInterval(timer);
        }
        elementFade.style.opacity = opac;
        opac += opac * 0.05;
    }, 15);
}

function getRandomJoke(){

    let url= "http://api.icndb.com/jokes/random";
    let request = new XMLHttpRequest();
    request.addEventListener("load", getJoke, true);
    request.open("GET", url, true);
    request.send(null);

}

function getJoke(e){

    let joke = document.getElementById("jokeHere");
    joke.innerHTML = e.target.response;

}
