// utilisateur choisit comment il souhaite sélectionner son soin
const btnChoiceMoment = document.querySelector("#btn-choice-moment");
const btnChoiceSkintype = document.querySelector("#btn-choice-skintype");

// Utilisateur clique sur moment
const moments = document.querySelector("#moments"); // Selecteur pour la div 'moments'
// on affiche le menu choix du moment
btnChoiceMoment.addEventListener("click", (event) => {
  optionsSelectSkincare.style.display = "none";
  moments.style.display = "";
});

// Quand on clique sur le bouton "matin", le choix des crèmes s'affiche
const btnmorning = document.querySelector("#morning"); // sélecteur pour le bouton matin
const creamoptions = document.querySelector("#cream-options"); // sélecteur pour afficher les soins
btnmorning.addEventListener("click", (event) => {
  creamoptions.style.display = "";
});

// Quand on clique sur un choix de crème, toute la section crème disparaît
// Le choix du moment disparaît
// Les option d'achat apparaîssent
const buyingoptions = document.querySelector("#buying-options"); // sélecteur pour les options d'achat
// On propose à l'utilisateur de changer de moment pour voir un autre produit
const initmomentchoice = document.querySelector("#init-moment-choice");
const changemomentchoice = document.querySelector("#change-moment-choice"); // sélecteurs pour changer le titre de la question

creamoptions.addEventListener("click", (event) => {
  creamoptions.style.display = "none";
  buyingoptions.style.display = "";
  initmomentchoice.style.display = "none";
  changemomentchoice.style.display = "";
});

// ---------------------------------------------------------

// Utilisateur souhaite choisir son soin par type de peau
btnChoiceSkintype.addEventListener("click", (event) => {
  optionsSelectSkincare.style.display = "none";
  skintypes.style.display = "";
});

const optionsSelectSkincare = document.querySelector("#options-select-skincare") // sélecteur pour montrer les types de peau à choisir

// l'utilisateur a la peau sèche
const creamDrySkin = document.querySelector("#cream-dry-skin"); // sélecteur pour le bouton peau sèche
const initskintypechoice = document.querySelector("#init-skintype-choice");
const changeskintypechoice = document.querySelector("#change-skintype-choice");

creamDrySkin.addEventListener("click", (event) => {
  buyingoptions.style.display = "";
  initskintypechoice.style.display = "none";
  changeskintypechoice.style.display = "";
});
