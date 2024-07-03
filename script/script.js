let open = 0;
document.querySelector("#menu-burger").addEventListener("click", () => {
  let menuBurger;
  if (open === 0) {
    open = 1;
    document.querySelector("#vu-menu").style.display = "block";
    menuBurger = "images/menu-burger1.png";
  } else if (open === 1) {
    open = 0;
    document.querySelector("#vu-menu").style.display = "none";
    menuBurger = "images/menu-burger.png";
  }
  document.querySelector(
    "#menu-burger"
  ).innerHTML = `<img src=${menuBurger} alt="ouverture du menu">`;
});
