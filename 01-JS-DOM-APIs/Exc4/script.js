function getRepositorie() {
    var request = new XMLHttpRequest();
    var search = document.getElementById("user").value;
    request.open("GET", "https://api.github.com/search/repositories?q=" + search, true);
    request.onload = () => get_list(JSON.parse(request.responseText));
    request.send();
}

function get_list(user) {
    var userList = document.getElementsByClassName("repositories")[0];
    var Ul = document.createElement("ul");
    for (var count = 0; count < user.items.length; count++) {
        var Li = document.createElement("li");
        var user_Repo = document.createTextNode(user.items[count].name);
        Li.appendChild(user_Repo);
        Ul.appendChild(Li);
    }
    userList.appendChild(Ul);
}