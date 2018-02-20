document.getElementById("btn-joke").addEventListener("click", getJoke);
document.getElementById("btn-repos").addEventListener("click", getRepositories);
document.getElementById("btn-search").addEventListener("click", searchRepositories);

function getJoke() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://api.icndb.com/jokes/random", true);

    request.onload = function () {
        const containsTheJoke = JSON.parse(request.responseText);
        if (document.getElementById("error").style.visibility == "visible") {
            document.getElementById("error").style.visibility = "hidden";
        }
        document.getElementById("writable").innerHTML = containsTheJoke.value.joke;
    }

    request.onerror = function() {
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").style.visibility = "visible";
    }
    
    request.send();
    
}

function getRepositories() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/search/repositories?q=javascript", true);

    request.onload = function() {
        const data = JSON.parse(request.responseText);
        const list = document.getElementById("repos");

        while(list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        for (let i = 0; i < data.items.length; i++) {
            let obj = data.items[i]; 

            const child = document.createElement("li");
            child.className = "forLi";
            const header = document.createElement("h3");
            header.style.display = "inline";
            const headerData = document.createTextNode(obj.full_name);


            const avatar = document.createElement("img");
            avatar.src = obj.owner.avatar_url;
            avatar.setAttribute("height", "60");
            avatar.setAttribute("width", "60");
            avatar.setAttribute("alt", "Owner's Avatar");
            avatar.className = "forAvatars";

            header.appendChild(headerData);
            child.appendChild(header);
            const repos = document.getElementById("repos").appendChild(child);
            child.appendChild(avatar);
        }
    }

    request.send();
}

function searchRepositories(e) {
    e.preventDefault();
    const searchTerm = document.getElementById("input-repo").value;

    const request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/search/repositories?q=" + searchTerm, true);

    request.onload = function() {
        const data = JSON.parse(request.responseText);
        const list = document.getElementById("repos");

        while(list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        for (let i = 0; i < data.items.length; i++) {
            let obj = data.items[i]; 

            const child = document.createElement("li");
            child.className = "forLi";
            const header = document.createElement("h3");
            header.style.display = "inline";
            const headerData = document.createTextNode(obj.full_name);


            const avatar = document.createElement("img");
            avatar.src = obj.owner.avatar_url;
            avatar.setAttribute("height", "60");
            avatar.setAttribute("width", "60");
            avatar.setAttribute("alt", "Owner Avatar");
            avatar.className = "forAvatars";

            header.appendChild(headerData);
            child.appendChild(header);
            const repos = document.getElementById("repos").appendChild(child);
            child.appendChild(avatar);
        }
    }

    request.send();
}

