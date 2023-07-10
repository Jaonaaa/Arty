const sidebarToggler = document.querySelector(".navbar__logo");
const sidebar = document.querySelector(".sidebar");
const items = sidebar.querySelectorAll(".sidebar__item");

function sidebarIn() {
  let timeline = anime.timeline({
    easing: "easeInOutQuad",
  });
  timeline.add({
    targets: sidebar,
    translateX: 0,
    duration: 300,
  });
  timeline.add({
    targets: items,
    opacity: [0, 1],
    delay: (element, index) => (index + 1) * 100,
    duration: 300,
  });
}

function sidebarOut() {
  let timeline = anime.timeline({
    easing: "easeInOutQuad",
  });
  timeline.add({
    targets: items,
    opacity: [1, 0],
    delay: (element, index) => (index + 1) * 100,
    duration: 300,
  });
  timeline.add({
    targets: sidebar,
    translateX: -300,
    duration: 300,
  });
}

function toggleSidebar() {
  sidebar.classList.toggle("active");
  sidebar.classList.contains("active") ? sidebarIn() : sidebarOut();
}

sidebarToggler.addEventListener("click", toggleSidebar);
