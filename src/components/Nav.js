import { useState } from "react";

const Nav = ({ Logo, BurgerIcon, CloseIcon }) => {

  const [burgerState, setBurgerState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);

  function BurgerCTA() {
    document.querySelector('#burger-icon').classList.toggle('deactivated');
    if(!burgerState) {
      setBurgerState(true);
    }
    setBurgerState(false);
  }

  const BurgerMenu = () => {
    return (
      <div>
        <img
          onClick={BurgerCTA}
          className="nav__burger"
          src={BurgerIcon} alt='' />

        <div id='burger-icon' className="burger-modal deactivated">
          <div className="logo-and-button">
            <img className="burger__logo" src={Logo} alt='' />
            <img
              onClick={BurgerCTA}
              className="burger__close"
              src={CloseIcon} alt='' />
          </div>
          <ul className="burger__ul">
            <li><a className="burger__option" href="#nav">About</a></li>
            <li><a className="burger__option" href="#nav">Careers</a></li>
            <li><a className="burger__option" href="#nav">Events</a></li>
            <li><a className="burger__option" href="#nav">Products</a></li>
            <li><a className="burger__option" href="#nav">Support</a></li>
          </ul>
        </div>
      </div>
    )
  }

  const Ul = () => {
    return (
      <ul className="nav__ul">
        <li><a className="nav__option" href="#nav">About</a></li>
        <li><a className="nav__option" href="#nav">Careers</a></li>
        <li><a className="nav__option" href="#nav">Events</a></li>
        <li><a className="nav__option" href="#nav">Products</a></li>
        <li><a className="nav__option" href="#nav">Support</a></li>
      </ul>
    )
  }

  return (
    <nav id="nav" className="nav">
      <img className="nav__logo" src={Logo} alt='' />
      {windowWidth < 800
        ? <BurgerMenu />
        : <Ul />
      }
    </nav>
  )
}

export default Nav