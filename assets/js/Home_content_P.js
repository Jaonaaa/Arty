setUpRegimeParcours();
function setUpRegimeParcours() {
  let btn = document.getElementById("go_regime");
  btn.addEventListener("click", () => {
    moveHomePic();
  });
}

function moveHomePic() {
  let left = document.getElementById("left_container");
  let right = document.getElementById("right_container");
  left.style.transform = "translateX(-100%) rotate(90deg) translateY(100%)";
  setTimeout(() => {
    right.style.transform = "translateX(-10%) rotate(40deg) translateY(250%)";
  }, 200);
  setTimeout(() => {
    swapContent(1);
  }, 1300);
}

async function swapContent(index, to_do) {
  let main = document.querySelector(".main_content");
  console.log("index => ", index);
  if (index == 1) {
    main.innerHTML = firstContent();
    setUpWhatToDo();
    setTimeout(() => {
      showContent();
    }, 200);
  } else if (index == 2) {
    removeContent();
    await getAllPoids().then((data) => {
      main.innerHTML = secondContent(to_do, data.details);
      setUpBackArrow(index - 1);
      setUpPoids();
      setTimeout(() => {
        showContent();
      }, 200);
    });

    /////
  } else if (index == 3) {
    removeContent();
    await getAllDuration().then((data) => {
      main.innerHTML = thirdContent(data.details);
      setUpBackArrow(index - 1);
      setUpDuration();
      setTimeout(() => {
        showContent();
      }, 200);
    });
    /////
  } else if (index == 4) {
    removeContent();
    await getSuggestions(getAllDataForSuggestion()).then((data) => {
      main.innerHTML = suggestionsContent(data);
      setUpBackArrow(index - 1);
      setUpSuggestions();
      /////
      setTimeout(() => {
        showContent();
      }, 200);
    });
  }
}
function setUpWhatToDo() {
  let choices = document.querySelectorAll(".choice");
  let mainContent = document.querySelector(".main_content");
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      let to_do = choice.getAttribute("to_do");
      mainContent.setAttribute("to_do", to_do);
      removeContent();
      setTimeout(() => {
        let data = getAllDataForSuggestion();
        if (data.to_do == "imc") swapContent(3, to_do);
        else swapContent(2, to_do);
      }, 400);
    });
  });
}

function getAllDataForSuggestion() {
  let main = document.querySelector(".main_content");
  let to_do = main.getAttribute("to_do");
  let poids = main.getAttribute("poids");
  let duration = main.getAttribute("duration");
  return { duration: duration, poids: poids, to_do: to_do };
}

function setUpPoids() {
  let dataRow = document.querySelectorAll(".data_row");
  let mainContent = document.querySelector(".main_content");
  dataRow.forEach((row) => {
    let value = row.getAttribute("value");
    row.addEventListener("click", () => {
      console.log(value); // poids
      mainContent.setAttribute("poids", value);
      removeContent();
      setTimeout(() => {
        swapContent(3);
      }, 400);
    });
  });
}
function setUpDuration() {
  let dataRow = document.querySelectorAll(".data_row");
  let mainContent = document.querySelector(".main_content");
  dataRow.forEach((row) => {
    let value = row.getAttribute("value");
    row.addEventListener("click", () => {
      console.log(value); // durée
      mainContent.setAttribute("duration", value);
      removeContent();
      // mandefa données pour le regime
      setTimeout(() => {
        console.log("Loading");
        swapContent(4);
      }, 400);
    });
  });
}

function setUpSuggestions() {
  let suggestions = document.querySelectorAll(".suggestion_block");
  suggestions.forEach((suggestion) => {
    let id_regime = suggestion.getAttribute("id_regime");
    let id_sport = suggestion.getAttribute("id_sport");
    suggestion.addEventListener("click", () => {
      window.location = `${base_url}HomeController/Facturation/${id_regime}/${id_sport}`;
    });
  });
}

function setUpBackArrow(index) {
  let arrow_back = document.getElementById("arrow_back");
  arrow_back.addEventListener("click", () => {
    let data = getAllDataForSuggestion();
    if (data.to_do == "imc") index -= 1;
    if (index == 0) index = 1;
    back(index);
  });
}

function showContent() {
  let center_container = document.getElementById("center_container");
  center_container.style.opacity = 1;
  center_container.style.transform = "translateY(0)";
}

function removeContent() {
  let center_container = document.getElementById("center_container");
  center_container.style.opacity = 0;
  center_container.style.transform = "translateX(-40%)";
}

function back(index) {
  removeContent();
  setTimeout(() => {
    swapContent(index);
  }, 400);
}

function firstContent() {
  let content = `
    <div id="center_container">
        <div class="title_section">
            Vous voulez faire quoi?
        </div>
        <div class="choice_blocks">
            <div class="choice " to_do="perdre">
                <div class="img verticale">
                    <img src="${base_url}assets/img/perdre_poids.png" alt="">
                </div>
                <div class="label">
                    Perdre du poids
                </div>
            </div>
            <div class="choice" to_do="prendre">
                <div class="img">
                    <img src="${base_url}assets/img/prendre_poids.png" alt="">
                </div>
                <div class="label">
                    Prendre du poids
                </div>
            </div>

            <div class="choice" to_do="imc">
            <div class="img">
                <img src="${base_url}assets/img/prendre_poids.png" alt="">
            </div>
            <div class="label">
                Atteindre son IMC idéal
            </div>
        </div>

        </div>
    </div>
    `;
  return content;
}

function secondContent(to_do, data) {
  if (to_do == undefined) {
    to_do = document.querySelector(".main_content").getAttribute("to_do");
  }
  let row_poids = () => {
    let rows = "";
    data.forEach((dat, index) => {
      let debut = index == 0 ? 0 : data[index - 1].poids;
      let fin = data[index].poids;

      rows += `<div class="row_choice">
      <div class="index_row">
          ${index + 1} -
      </div>
      <div class="data_row" value="${fin}">
          ${debut} - ${fin}kg
      </div>
    </div>`;
    });
    return rows;
  };
  let content = `
    <div id="center_container">
    <div id="arrow_back">
        <img src="${base_url}assets/img/arrow_back.png" alt="">
    </div>
    <div class="title_section">
        Vous voulez ${to_do} combien de poids?
    </div>
    <div class="list_choice">
        ${row_poids()}
    </div>
</div>
    `;
  return content;
}

function thirdContent(data) {
  let row_duration = () => {
    let rows = "";
    data.forEach((dat, index) => {
      let debut = index == 0 ? 0 : data[index - 1].nombre_jour;
      let fin = data[index].nombre_jour;
      rows += `<div class="row_choice">
      <div class="index_row">
          ${index + 1} -
      </div>
      <div class="data_row" value="${fin}">
           ${fin} jour
      </div>
    </div>`;
    });
    return rows;
  };

  let content = `
    <div id="center_container">
    <div id="arrow_back">
        <img src="${base_url}assets/img/arrow_back.png" alt="">
    </div>
    <div class="title_section">
        Pendant quelle durée?
    </div>
    <div class="list_choice">
        ${row_duration()}
    </div>
</div>
    `;
  return content;
}

function suggestionsContent(data) {
  let content = `
  <div id="center_container">
  <div class="title_section">
      Vos suggestions de régime
  </div>
  <div id="arrow_back">
  <img src="${base_url}assets/img/arrow_back.png" alt="">
</div>
  <div class="suggestions_container"> `;
  if (data.length == 0) {
    content += "Aucune suggestion";
  }
  data.forEach((da) => {
    let regime = da.regime;
    let sport = da.sport;
    let block = `
          <div class="suggestion_block" id_regime="${regime.regime.id_regime}" id_sport="${sport.id_sport}">
              <div class="left">
                  <div class="row_about">
                      <div class="label">Régime</div>
                      <div class="value">${regime.regime.nom}</div>
                  </div>
                  <div class="row_about">
                      <div class="label">Sport</div>
                      <div class="value">${sport.nom}</div>
                  </div>
                  <div class="row_about">
                      <div class="label">Durée</div>
                      <div class="value">${regime.regime.duree} j</div>
                  </div>
                  <div class="row_about">
                      <div class="label">Changement de poids</div>
                      <div class="value">${da.poidsTotalConsommer} kg</div>
                  </div>
                  <div class="row_about">
                      <div class="label">Prix</div>
                      <div class="value">${da.regime.prix} Ar</div>
                  </div>
              </div>
              <div class="right">
                  <img src="${base_url}assets/img/sign_in_1.webp" alt="">
              </div>
          </div>
  
     
        `;
    content += block;
  });
  content += `
  </div>
  </div>
  `;
  return content;
}

async function getAllPoids() {
  let xhr = getTheBoy();
  let newPromise = new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);
          if (retour.status == "error") {
            createSidePopUp(retour.details, "error");
            reject("Erreur" + retour.details);
          } else {
            console.log(retour);
            resolve(retour);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.addEventListener("error", function (event) {
      alert("Oups! Quelque chose s'est mal passé .");
    });
    xhr.open("POST", `${base_url}index.php/HomeController/getChoixPoids`, true);
    xhr.send(null);
  });
  return newPromise;
}

async function getAllDuration() {
  let xhr = getTheBoy();
  let newPromise = new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);
          if (retour.status == "error") {
            createSidePopUp(retour.details, "error");
            reject("Erreur" + retour.details);
          } else {
            console.log(retour);
            resolve(retour);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.addEventListener("error", function (event) {
      alert("Oups! Quelque chose s'est mal passé .");
    });
    xhr.open(
      "POST",
      `${base_url}index.php/HomeController/getChoixDuration`,
      true
    );
    xhr.send(null);
  });
  return newPromise;
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

async function getSuggestions(data) {
  let xhr = getTheBoy();
  let formData = new FormData();
  formData.append("duration", data.duration);
  formData.append("type", data.to_do);
  formData.append("poids", data.poids);

  let newPromise = new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);
          if (retour.status == "error") {
            createSidePopUp(retour.details, "error");
            reject("Erreur" + retour.details);
          } else {
            console.log(retour);
            resolve(retour);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.addEventListener("error", function (event) {
      alert("Oups! Quelque chose s'est mal passé .");
    });
    xhr.open(
      "POST",
      `${base_url}index.php/HomeController/get_suggestions`,
      true
    );
    xhr.send(formData);
  });
  return newPromise;
}
