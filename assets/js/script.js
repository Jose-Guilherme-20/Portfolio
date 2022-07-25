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
