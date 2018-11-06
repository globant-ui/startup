
//when the window is loaded "hello world" appears with a animation(Fade in).

window.addEventListener("load",() => {
    let hdn = document.getElementsByClassName("hidden-text")[0];
    hdn.innerHTML = "Hello World!";
});

 // ************************************************************************
 // ************************************************************************
 // ************************************************************************


//reusable_fun()
//take:(string,string,bool) return: Promise
//Gets the information from the taked API via XMLhttprequest
function reusable_fun (mtd, url, asyn) {
    let myPromise = new Promise( (resolve,reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open(mtd, url, asyn);
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status == 200){
                resolve(xhttp.responseText); 
            } else if (xhttp.status > 399){
                reject(xhttp.status);   
            }
        };
        xhttp.send();
    });
    return myPromise;
}

//Shows the joke if everything is right, and shows an error if something is wrong
function show_joke(){
    let jokePromise = reusable_fun("GET", "http://api.icndb.com/jokes/random", true);
    jokePromise.then((txt)=>{
        let myData = JSON.parse(txt); //passes from text form to json form
        let jkc = document.getElementsByClassName("joke-text")[0];
        jkc.innerText = myData.value.joke + "";
    }).catch((_status) => {
        let err = document.getElementsByClassName("joke-container")[0];
        err.style.backgroundColor = "red";
        document.getElementsByClassName("joke-text")[0].innerHTML = _status;
        err.style.animation = "fadeIn 2s";
    });
}

//When you press the button "Get a Joke" show_joke is triggered
document.getElementsByClassName("joke")[0].addEventListener("click",show_joke);

 // ************************************************************************
 // ************************************************************************
 // ************************************************************************

 //Gets the information from "https://api.github.com/search/repositories?q=" with parameters via XMLhttprequest
function get_repositorie(){
    let xhr = new XMLHttpRequest();
    let search = document.getElementById("git").value;
    xhr.open("GET","https://api.github.com/search/repositories?q="+search, true);
    xhr.onload = () => show_list(JSON.parse(xhr.responseText));
    xhr.send();
}


//Shows the list of repositories in the right side of screen
function show_list(user){
    let usrList = document.getElementsByClassName("user-list")[0];
    let usrUl = document.createElement("ul");
    for(let i = 0;i < user.items.length ; i++){
        let usrLi = document.createElement("li");
        let usrRepo = document.createTextNode(user.items[i].name+" _");
        usrLi.appendChild(usrRepo);
        usrUl.appendChild(usrLi);
    }
    usrList.appendChild(usrUl);
}