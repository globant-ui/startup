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
      console.log(response);
      let text;
      let repositories = response.items
      text = "<ul class='repositories-list' >";
      repositories.forEach((repository) => {
        text += `
            <li>${repository.full_name}</li>
           `;
      })
      document.getElementById("show").innerHTML = text;
    })
}
