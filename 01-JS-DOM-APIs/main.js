
//when the window is loaded "hello world" appears with a animation.
window.addEventListener("load",() => {
    let hdn = document.getElementsByClassName("hidden-text")[0];
    hdn.innerHTML = "Hello World!";
});


let btn =  document.getElementsByClassName("joke")[0];

//add a event to the button
btn.addEventListener("click",get_joke);


//With a XMLhttprequest get a inforamtion in text form from "http://api.icndb.com/jokes/random"   
function get_joke(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let myData = JSON.parse(xhttp.responseText); //passes from text form to json form
            alert(myData.value.joke);
        }
    }
    xhttp.send();
}


function get_repositorie(){
    let xhr = new XMLHttpRequest();
    let search = document.getElementById("git").value;
    xhr.open("GET","https://api.github.com/search/repositories?q="+search, true);
    xhr.onload = () => show_list(JSON.parse(xhr.responseText));
    xhr.send();
}

function show_list(user){
    let usrList = document.getElementsByClassName("user-list")[0];
    let usrUl = document.createElement("ul");
    for(let i = 0;i < user.items.length ; i++){
        let usrLi = document.createElement("li");
        let usrRepo = document.createTextNode(user.items[i].name);
        usrLi.appendChild(usrRepo);
        usrUl.appendChild(usrLi);
    }
    usrList.appendChild(usrUl);
}