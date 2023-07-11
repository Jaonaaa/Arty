setUpRegimeParcours();
function setUpRegimeParcours() {
  let btn = document.getElementById("go_regime");
  console.log(btn);
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

function swapContent(index, to_do) {
  let main = document.querySelector(".main_content");
  if (index == 1) {
    main.innerHTML = firstContent();
    setUpWhatToDo();
  } else if (index == 2) {
    removeContent();
    main.innerHTML = secondContent(to_do);
    setUpBackArrow(index - 1);
    setUpPoids();
  } else if (index == 3) {
    removeContent();
    main.innerHTML = thirdContent();
    setUpBackArrow(index - 1);
    setUpDuration();
  } else if (index == 4) {
    removeContent();
    main.innerHTML = suggestionsContent(null);
    setUpBackArrow(index - 1);
    setUpSuggestions();
  }
  setTimeout(() => {
    showContent();
  }, 200);
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
        swapContent(2, to_do);
      }, 400);
    });
  });
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
  suggestions.forEach((suggestions) => {
    // get id regime
    //
    suggestions.addEventListener("click", () => {
      // add bla bla
      window.location = `${base_url}HomeController/Facturation`;
    });
  });
}

function setUpBackArrow(index) {
  let arrow_back = document.getElementById("arrow_back");
  arrow_back.addEventListener("click", () => {
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
            <div class="choice" to_do="perdre">
                <div class="img">
                    <img src="${base_url}assets/img/sign_in_1.webp" alt="">
                </div>
                <div class="label">
                    Perdre du poids
                </div>
            </div>
            <div class="choice" to_do="prendre">
                <div class="img">
                    <img src="${base_url}assets/img/sign_in_1.webp" alt="">
                </div>
                <div class="label">
                    Prendre du poids
                </div>
            </div>

        </div>
    </div>
    `;
  return content;
}

function secondContent(to_do) {
  if (to_do == undefined) {
    to_do = document.querySelector(".main_content").getAttribute("to_do");
  }
  let content = `
    <div id="center_container">
    <div id="arrow_back">
        <img src="${base_url}assets/img/arrow_back.png" alt="">
    </div>
    <div class="title_section">
        Vous voulez ${to_do} combien de poids?
    </div>
    <div class="list_choice">
        <div class="row_choice">
            <div class="index_row">
                1 -
            </div>
            <div class="data_row" value="10">
                5 - 10kg
            </div>
        </div>
        <div class="row_choice">
            <div class="index_row">
                2 -
            </div>
            <div class="data_row" value="15">
                10 - 15kg
            </div>
        </div>
        <div class="row_choice">
            <div class="index_row">
                3 -
            </div>
            <div class="data_row" value="20">
                15 - 20kg
            </div>
        </div>
    </div>
</div>
    `;
  return content;
}

function thirdContent() {
  let content = `
    <div id="center_container">
    <div id="arrow_back">
        <img src="${base_url}assets/img/arrow_back.png" alt="">
    </div>
    <div class="title_section">
        Pendant quelle durée?
    </div>
    <div class="list_choice">
        <div class="row_choice">
            <div class="index_row">
                1 -
            </div>
            <div class="data_row" value="30">
                15 - 30 jour
            </div>
        </div>
        <div class="row_choice">
            <div class="index_row">
                2 -
            </div>
            <div class="data_row" value="45">
                30 - 45 jour
            </div>
        </div>
        <div class="row_choice">
            <div class="index_row">
                3 -
            </div>
            <div class="data_row" value="60">
                45 - 60kg
            </div>
        </div>
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
    <div class="suggestions_container">

        <div class="suggestion_block">
            <div class="left">
                <div class="row_about">
                    <div class="label">Nom</div>
                    <div class="value">Régime maxi</div>
                </div>
                <div class="row_about">
                    <div class="label">Apport Calorique / j</div>
                    <div class="value">1200 KCal</div>
                </div>
                <div class="row_about">
                    <div class="label">Durée</div>
                    <div class="value">16 j</div>
                </div>
                <div class="row_about">
                    <div class="label">Perte de poids</div>
                    <div class="value">12 kg</div>
                </div>
                <div class="row_about">
                    <div class="label">Prix</div>
                    <div class="value">12000 Ar</div>
                </div>
            </div>
            <div class="right">
                <img src="${base_url}assets/img/sign_in_1.webp" alt="">
            </div>
        </div>

    </div>
</div>
      `;
  return content;
}
