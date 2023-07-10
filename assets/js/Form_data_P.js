import { setUpInputs } from "./P/Login_.js";
import { createSidePopUp } from "./P/PopUp.js";

setUpInputs();
setUpBlockGender();
handleForm();

function handleForm() {
  let forms = document.querySelectorAll(".form");
  let index = 0;
  forms.forEach((form, index) => {
    if (index == 0) form.style.display = "flex";
  });
  // swap form
  let btn = document.getElementById("btn_next");
  btn.addEventListener("click", () => {
    if (index == 0) {
      let genre = valideGender();
      if (genre != null) {
        formGetSelected(index).style.display = "none";
        index = 1;
        formGetSelected(index).style.display = "flex";
        changeText_btn_next("Valider");
      }
    } else if (index == 1) {
      let mesuresation = getMesuration();
      if (mesuresation != undefined) {
        console.log(mesuresation);
        //changeText_btn_next("Valider");
      }
    }
  });
}

function changeText_btn_next(text) {
  let btn = document.getElementById("btn_next");
  btn.innerHTML = text;
}

function valideGender() {
  let genderSelcted = document.querySelector(".block_selected");
  if (genderSelcted == null) {
    createSidePopUp("Veuillez selectionner un genre", "error");
    return null;
  } else return genderSelcted.getAttribute("gender");
}
function formGetSelected(index) {
  let forms = document.querySelectorAll(".form");
  return forms[index];
}
function getMesuration() {
  let input_taille = +document.getElementById("taille_user").value;
  let input_poids = +document.getElementById("poids_user").value;
  if (isNaN(input_taille) || isNaN(input_poids)) {
    createSidePopUp("Veuillez vérifier les données entrer", "error");
  } else {
    if (valideGender(input_taille) && valideMesure(input_poids)) {
      if (input_taille < 40 || input_poids < 40) {
        createSidePopUp("Valeur trop petite", "error");
      } else return { taille: input_taille, poids: input_poids };
    } else {
      createSidePopUp("Valeur négatif ou null", "error");
    }
  }
}

function valideMesure(value) {
  if (+value <= 0) {
    return false;
  } else return true;
}
function setUpBlockGender() {
  let genders = document.querySelectorAll(".block_gender");
  genders.forEach((gender) => {
    gender.addEventListener("click", () => {
      if (!gender.classList.contains("block_selected")) {
        gender.classList.add("block_selected");
        removeOtherBlockGenderSelected(gender);
      }
    });
  });
}
function removeOtherBlockGenderSelected(genderSelected) {
  let genders = document.querySelectorAll(".block_gender");
  genders.forEach((gender) => {
    if (genderSelected != gender) {
      gender.classList.remove("block_selected");
    }
  });
}
