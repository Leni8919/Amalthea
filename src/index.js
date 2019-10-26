
const creamoptions = document.querySelector("#cream-options");
const moments = document.querySelector("#moments");
const btnmorning = document.querySelector("#morning");
const buyingoptions = document.querySelector("#buying-options");
const initmomentchoice = document.querySelector("#init-moment-choice");
const changemomentchoice = document.querySelector("#change-moment-choice");

btnmorning.addEventListener("click", (event) => {
  creamoptions.style.display = "";
});

creamoptions.addEventListener("click", (event) => {
  creamoptions.style.display = "none";
  buyingoptions.style.display = "";
  initmomentchoice.style.display = "none";
  changemomentchoice.style.display = "";
});

