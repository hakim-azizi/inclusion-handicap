import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/header.css";

function Header() {
  const [open, setOpen] = useState(0);
  const [menuBurger, setMenuBurger] = useState("images/menu-burger.png");
  const openMenu = () => {
    if (open === 0) {
      setOpen(1);
      document.querySelector("#vu-menu").style.display = "block";
      setMenuBurger("images/menu-burger1.png");
    } else {
      setOpen(0);
      document.querySelector("#vu-menu").style.display = "none";
      setMenuBurger("images/menu-burger.png");
    }
    // document.querySelector("#menu-burger").innerHTML =
    // `<img src=${menuBurger} alt="ouverture du menu">`;
  };
  return (
    <header className="nav-bar">
      <nav>
        <figure>
          <img src="images/logo.jpg" alt="logo" />
        </figure>
        <ul id="vu-menu">
          <li>
            <a href="./">acceuil</a>
          </li>
          <li>
            <NavLink to="page-generique.html">lien 1</NavLink>
          </li>
          <li>
            <NavLink to="page-generique.html">lien 2</NavLink>
          </li>
          <li>
            <NavLink to="page-generique.html">lien 3</NavLink>
          </li>
          <li>
            <NavLink to="page-generique.html">lien 4</NavLink>
          </li>
          <li>
            <NavLink to="page-generique.html">lien 5</NavLink>
          </li>
        </ul>
        <figure id="menu-burger">
          <button type="button" onClick={openMenu}>
            {" "}
            <img src={menuBurger} alt="ouverture du menu" />
          </button>
        </figure>
      </nav>
    </header>
  );
}

export default Header;
