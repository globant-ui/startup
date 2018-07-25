window.onload = function() {

  document.getElementById("form").addEventListener("submit", save_answer_localStorage, false);
  document.getElementById("btn-erase").addEventListener("click", erase_answer_localStorage, false);
}

function save_answer_localStorage(form) {
  form.preventDefault();
  const localStorage = window.localStorage;
  const answer = document.getElementById("answer").value;
  localStorage.setItem("answer", answer);

  //TEST
  //console.log(localStorage.getItem("answer"));
}

function erase_answer_localStorage(form) {
  const localStorage = window.localStorage;
  localStorage.removeItem("answer");
}