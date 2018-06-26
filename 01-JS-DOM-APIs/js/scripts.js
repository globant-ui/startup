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
      if (response) {
        let joke = response.value.joke
        console.log(response);
        document.getElementById("show").innerHTML = joke
      }
    })
    .catch((error) => {
      console.error(error);
    })
}
