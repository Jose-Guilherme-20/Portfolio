function menuShow() {
  var tam = document.getElementsByTagName("header")[0];

  var menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "./assets/img responsividade/menu_white_36dp.svg";
    tam.style.height = "auto";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "./assets/img responsividade/close_white_36dp.svg";
    tam.style.height = "auto";
  }
}

// Scroll do Menu
const hadleScroll = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
const home = document.getElementById("home");
home.onclick = hadleScroll;

const hadleHab = () => {
  window.scroll({
    top: 660,
    behavior: "smooth",
  });
};
const hab = document.getElementById("hab");
hab.onclick = hadleHab;

const hadleSbm = () => {
  window.scroll({
    top: 1500,
    behavior: "smooth",
  });
};
const sbm = document.getElementById("sbm");
sbm.onclick = hadleSbm;

const hadleProj = () => {
  window.scroll({
    top: 2200,
    behavior: "smooth",
  });
};
const proj = document.getElementById("proj");
proj.onclick = hadleProj;
