import { createSidePopUp } from "./PopUp.js";

export function setUpSwap() {
  let sign_up = document.getElementById("sign_up_btn");
  let sign_in = document.getElementById("sign_in_btn");
  //
  if (sign_up != undefined) {
    sign_up.addEventListener("click", () => {
      showSwaper(`${base_url}assets/img/sign_up.png`, 0);
    });
  } else {
    sign_in.addEventListener("click", () => {
      showSwaper(`${base_url}assets/img/sign_in.png`, 1);
    });
  }
}
export function showSwaper(text, mode) {
  let showContainer = document.getElementById("hider_form");
  showContainer.classList.add("big_hider_form");
  let form = mode == 1 ? "sign_up" : "sign_in";
  setTimeout(() => {
    if (mode == 0) showContainer.style.left = "100%";
    else if (mode == 1) showContainer.style.left = "-50%";
    showSwaperText(text);
  }, 400);
  setTimeout(() => {
    handleSwap(form);
  }, 550);
  setTimeout(() => {
    showContainer.classList.remove("big_hider_form");
  }, 1000);
  // setTimeout(() => {
  //   //showContainer.removeAttribute("style");
  // }, 1800);
}
export function showSwaperText(text) {
  let container = document.getElementById("text_hider_form");
  setTimeout(() => {
    container.innerHTML = `<img src="${text}" alt="sign"> `;
    container.style.opacity = 1;
    container.style.transform = "none";
  }, 200);
  setTimeout(() => {
    container.removeAttribute("style");
  }, 600);
}
// form
export function handleSwap(swapFrom) {
  let leftContainer = document.getElementById("left_container");
  let rightContainer = document.getElementById("rigth_container");
  if (swapFrom == "sign_up") {
    makeFormSignIn(leftContainer, rightContainer);
  } else if (swapFrom == "sign_in") {
    makeFormSignUp(leftContainer, rightContainer);
  }
  clearPicIntervale();
  handleLogAll();
}
export function makeFormSignIn(left_container, right_container) {
  //
  left_container.removeAttribute("style");
  right_container.removeAttribute("style");
  left_container.classList.remove("revert_left");
  right_container.classList.remove("revert_right");
  ///
  left_container.innerHTML = `
  <div class="title_site_logo">
						<div class="mini_logo">
							<img src="${base_url}assets/img/Arty_logo.png" alt="logo">
						</div>
						<div class="name_site">
							<img src="${base_url}assets/img/Arty_text.png" alt="">
						</div>
					</div>

					<form action="/" method="post" id="form_sign_in">
						<div class="title_form" id="sign_in_title">
							Bienvenue
						</div>
						<div class="subtitle_form">
            Veuillez entre vos données de connexion.
						</div>
						<div class="input">
							<input type="email" name="email_user" required id="email_user">
							<label>Email</label>

						</div>
						<div class="input">
							<input type="password" name="pwd_user" required id="pwd_user">
							<label>Mot de passe</label>
						</div>
						<div class="options_row">
							<div class="option">
							</div>
							<div class="option">
								<div class="link" id="forgot_pwd">Mot de passe oublié</div>
							</div>
						</div>
						<div class="btn large">
							<button>Se connecter</button>
						</div>
						<div class="sign_up_row">
                  Pas de compte ?  <div class="link" id="sign_up_btn">
                  Incrivez-vous gratuitement
								<div class="img_under_link">
									<img src="${base_url}assets/img/under_link.png" alt="under_link">
								</div>
							</div>

						</div>
					</form>
  `;
  right_container.innerHTML = `
  <div id="controller_slider">
					</div>
					<div class="picture_slide" title="Une alimentation saine"
						subtitle="
            Transformez votre corps, vivez en meilleure santé et atteignez vos objectifs 
						de remise en forme avec notre programme de régime personnalisé. 
						Découvrez une nouvelle version de vous-même et adoptez un mode de vie équilibré pour une transformation durable.
          ">
						<img src="${base_url}assets/img/sign_in_1.webp" alt="">
					</div>
					<div class="picture_slide" title="Un poids idéal" subtitle="
          Découvrez votre poids idéal et réalisez une transformation incroyable. Trouvez l'équilibre parfait pour votre corps, atteignez votre poids idéal et vivez en pleine santé. 
					Libérez le meilleur de vous-même et embrassez une vie épanouissante.
          ">
						<img src="${base_url}assets/img/sign_in_2.webp" alt="">
					</div>
					<div class="picture_slide" title="Livraison rapide" subtitle="
          Profitez d'une livraison rapide de repas sains et équilibrés directement chez vous, 
					pour une remise en forme efficace sans compromis sur la qualité. 
          ">
						<img src="${base_url}assets/img/sign_in_3.webp" alt="">
					</div>

					<div class="content_picture_container">
						<div class="bottom_section">
							<div class="couvert">
								<div class="title"></div>
							</div>
							<div class="couvert">
								<div class="subtitle">
								</div>
							</div>
						</div>
					</div>
   `;
}
export function makeFormSignUp(left_container, right_container) {
  //
  left_container.style.justifyContent = "flex-start";
  left_container.style.width = "52%";
  right_container.style.width = "48%";
  right_container.style.justifyContent = "center";
  right_container.style.flexDirection = "column";
  left_container.classList.add("revert_left");
  right_container.classList.add("revert_right");
  ///
  left_container.innerHTML = `
  <div id="controller_slider">
					</div>
					<div class="picture_slide" title="Un corps parfait" subtitle="
					Transformez votre corps et atteignez la perfection grâce à notre programme de régime sur mesure. 
          Obtenez une silhouette sculptée, tonifiée et irrésistible en adoptant une alimentation saine et équilibrée
          ">
						<img src="${base_url}assets/img/sign_up_1.webp" alt="">
					</div>
					<div class="picture_slide" title="Divers regime" subtitle="
          Explorez nos options personnalisées, trouvez celui qui vous convient 
          et lancez-vous dans une transformation positive pour une vie plus saine et épanouissante.					">
						<img src="${base_url}assets/img/sign_up_2.webp" alt="">
					</div>
					<div class="picture_slide" title="Plat délicieux" subtitle="
          Découvrez notre sélection de plats délicieux et équilibrés, spécialement conçus pour combiner santé et saveurs exquises.
          ">
						<img src="${base_url}assets/img/sign_up_3.webp" alt="">
					</div>
					<div class="content_picture_container">
						<div class="bottom_section">
							<div class="couvert">
								<div class="title"></div>
							</div>
							<div class="couvert">
								<div class="subtitle">
								</div>
							</div>
						</div>
					</div>
  `;
  right_container.innerHTML = `
   <div class="title_site_logo">
						<div class="mini_logo">
							<img src="${base_url}assets/img/Arty_logo.png" alt="logo">
						</div>
						<div class="name_site">
							<img src="${base_url}assets/img/Arty_text.png" alt="">
						</div>
					</div>
					<form action="/" method="post" id="form_sign_up">
						<div class="title_form" id="sign_in_title">
							Incription
						</div>
						<div class="subtitle_form">
              Veuillez entrer vos détails.
						</div>

          <div class="input">
            <input type="text" name="name_user" required id="name_user">
            <label>Votre nom</label>
          </div>
            <div class="input">
            <input type="date" name="dtn_user" required id="dtn_user">
            <label>Date de naissance</label>
          </div>
						<div class="input">
							<input type="email" name="email_user" required id="email_user">
							<label>Email</label>
						</div>
						<div class="input">
							<input type="password" name="pwd_user" required id="pwd_user">
							<label>Mot de passe</label>
						</div>
            
				
						<div class="btn large">
							<button>S'inscrire</button>
						</div>
						<div class="sign_up_row">
							Vous avez déja un compte ? <div class="link" id="sign_in_btn">
								Connectez-vous
								<div class="img_under_link">
									<img src="${base_url}assets/img/under_link.png" alt="under_link">
								</div>
							</div>
						</div>
					</form>
   `;
}
// inputs && slider
export function setUpInputs() {
  let inputs = document.querySelectorAll(".input");
  inputs.forEach((block) => {
    let label = block.querySelector("label");
    let input = block.querySelector("input");
    input.addEventListener("blur", () => {
      let content = input.value.trim();
      if (content != "") {
        label.classList.add("label-up");
        input.style.color = "rgb(49, 49, 49)";
      } else {
        label.classList.remove("label-up");
        input.removeAttribute("style");
      }
    });
  });
}
export function sliderPicture() {
  automatisationSlider();
  setSliderController();
}
function clearPicIntervale() {
  let container_pics = document.querySelector(".container_login");
  let id = +container_pics.getAttribute("id_int");
  clearInterval(id);
}
function automatisationSlider() {
  let container_pics = document.querySelector(".container_login");
  container_pics.setAttribute("x_translate", "0");
  container_pics.setAttribute("direction", "right");
  let id = setInterval(() => {
    switchPictureAuto();
  }, 6500);
  container_pics.setAttribute("id_int", id);
  return id;
}
export function setSliderController() {
  let container_pics = document.querySelector(".container_login");
  let pics = container_pics.querySelectorAll(".picture_slide");
  let sliderController = document.getElementById("controller_slider");
  pics.forEach((pic, index) => {
    if (index == 0) {
      sliderController.innerHTML += `<div class="controller selected_controller"> </div>`;
      swapContent(index);
    } else sliderController.innerHTML += `<div class="controller"> </div>`;
  });
  setUpController();
}
function setUpController() {
  let controllers = document.querySelectorAll(".controller");
  controllers.forEach((controll, index) => {
    controll.addEventListener("click", () => {
      if (!controll.classList.contains("selected_controller")) {
        controll.classList.add("selected_controller");
        removeOtherController(controll);
      }
      switchPicture(index);
    });
  });
}
function removeOtherController(controller) {
  let controllers = document.querySelectorAll(".controller");
  controllers.forEach((controll) => {
    if (controll != controller) {
      controll.classList.remove("selected_controller");
    }
  });
}
export function switchPictureAuto() {
  let container_pics = document.querySelector(".container_login");
  let x_trans = +container_pics.getAttribute("x_translate");
  let direction = container_pics.getAttribute("direction");
  let pics = container_pics.querySelectorAll(".picture_slide");
  let max = 100 * pics.length;
  if (direction == "right") {
    x_trans -= 100;
    if (max == -x_trans) {
      x_trans += 100 * 2;
      container_pics.setAttribute("direction", "left");
    }
  } else if (direction == "left") {
    x_trans += 100;
    if (x_trans > 0) {
      x_trans -= 100 * 2;
      container_pics.setAttribute("direction", "right");
    }
  }
  let indexControll = x_trans / 100;
  if (indexControll < 0) indexControll *= -1;
  container_pics.setAttribute("x_translate", x_trans);
  pics.forEach((pic, index) => {
    pic.style.transform = `translateX(${x_trans}%)`;
  });
  // active controller
  let controllers = document.querySelectorAll(".controller");
  controllers[indexControll].classList.add("selected_controller");
  removeOtherController(controllers[indexControll]);
  swapContent(indexControll);
}
export function swapContent(index) {
  let pictures = document.querySelectorAll(".picture_slide");
  let titleContent = pictures[index].getAttribute("title");
  let subtitleContent = pictures[index].getAttribute("subtitle");
  let titleContainer = document.querySelector(".couvert .title");
  let subtitleContainer = document.querySelector(".couvert .subtitle");
  slideUp(titleContainer, titleContent);
  slideUp(subtitleContainer, subtitleContent);
}
export function slideUp(element, text) {
  element.style.transform = "translateY(-130%)";
  setTimeout(() => {
    element.style.opacity = 0;
    element.innerHTML = text;
  }, 500);
  setTimeout(() => {
    element.style.transform = "translateY(130%)";
  }, 900);
  setTimeout(() => {
    element.style.opacity = 1;
  }, 1250);
  setTimeout(() => {
    element.removeAttribute("style");
  }, 1300);
}
export function switchPicture(index) {
  let container_pics = document.querySelector(".container_login");
  let current_x_trans = container_pics.getAttribute("x_translate");
  let current_direction = container_pics.getAttribute("direction");
  let x_trans = -1 * (100 * index);
  let direction = current_direction;
  if (x_trans < current_x_trans) {
    // va vers la doite
    direction = "right";
  } else if (x_trans > current_x_trans) {
    // va vers la gauche
    direction = "left";
  }
  let pics = container_pics.querySelectorAll(".picture_slide");
  container_pics.setAttribute("direction", direction);
  container_pics.setAttribute("x_translate", x_trans);
  pics.forEach((pic) => {
    pic.style.transform = `translateX(${x_trans}%)`;
  });
  swapContent(index);
}
/////
export function handleLogAll() {
  setUpInputs();
  setUpSwap();
  sliderPicture();
  setUpForm();
}
export function setUpForm() {
  let form = document.querySelector("form");
  let idForm = form.getAttribute("id");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (idForm == "form_sign_in") {
      sign_in(form);
    } else if (idForm == "form_sign_up") {
      sign_up(form);
    }
  });
}
export function getTheBoy() {
  let xhr;
  try {
    xhr = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e2) {
      try {
        xhr = new XMLHttpRequest();
      } catch (e3) {
        xhr = false;
      }
    }
  }
  return xhr;
}

function sign_in(form) {
  let xhr = getTheBoy();
  let formData = new FormData(form);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var retour = JSON.parse(xhr.responseText);
        if (retour.status == "error") {
          createSidePopUp(retour.details, "error");
        } else {
          console.log(retour);
          window.location = `${base_url}HomeController`;
        }
      } else {
        console.log(xhr.status);
      }
    }
  };
  xhr.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé lors de la publication .");
  });
  xhr.open("POST", `${base_url}index.php/LoginController/sign_in`, true);
  xhr.send(formData);
}
function sign_up(form) {
  let xhr = getTheBoy();
  let formData = new FormData(form);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var retour = JSON.parse(xhr.responseText);
        if (retour.status == "error") {
          createSidePopUp(retour.details, "error");
        } else {
          console.log(retour);
          window.location = `${base_url}index.php/LoginController/sign_in_forced/${(
            "" + retour.email
          ).replace("@", "arrow_base_xr")}/${retour.pwd}`;
        }
      } else {
        console.log(xhr.status);
      }
    }
  };
  xhr.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé .");
  });
  xhr.open("POST", `${base_url}index.php/LoginController/sign_up`, true);
  xhr.send(formData);
}
