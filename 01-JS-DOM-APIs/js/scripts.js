const xhttp = new XMLHttpRequest();
const el = document.querySelector('.js-fade');

if (el.classList.contains('is-paused')) {
  el.classList.remove('is-paused');
}


const callData = (data) => {
  let promise = new Promise((resolve, reject) => {
    xhttp.open(data.method, data.url, data.bool);
    xhttp.send();
    xhttp.onload = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        resolve(JSON.parse(xhttp.responseText));
      } else {
        reject("Error")
      }
    }
  });

  return promise;
};

const showMe = (method, url, bool) => {
  let data = {
    method: method,
    url: url,
    bool: bool
  }
  callData(data)
    .then((response) => {
      let text;
      let repositories = response.items
      text = "<input type='text' name='search' id='searchInput' onkeyup='srch()' placeholder='Search a repository...'><br><ul id='list' class='repositories-list' >";
      repositories.forEach((repository) => {
        text += `
            <li><a href="#">${repository.full_name}</a></li>
           `;
      })
      document.getElementById("show").innerHTML = text;
    })
}


  const generateTable = () => {
    let body = document.getElementsByTagName("body")[0];

    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < 2; j++) {
        let cell = document.createElement("td");
        let textCell = document.createTextNode("cell on row " + i + ", column " + j);
        cell.appendChild(textCell);
        row.appendChild(cell);
      }

      tblBody.appendChild(row);
    }

    table.appendChild(tblBody);
    body.appendChild(table);
    table.setAttribute("border", "2");
  }

const srch = () => {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";

    }
  }
}