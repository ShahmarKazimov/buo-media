import { useState } from "react"
import HamMenuLink from "./HamMenuLink";
import "./HamburgerMenu.scss"


const HamburgerMenuPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen),
      document.body.classList.toggle('lock-scroll');
  }

  return <>
    <div>
      <div>
        <div className="navbar pt-8">
          <div className={`burger-menu ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleNavbar} >
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
          </div>
        </div>
      </div>
      <div className={`menu ${isMenuOpen ? 'visible' : 'hidden'}`}>
        <div className={`${isMenuOpen ? 'open' : 'close'}`} onClick={toggleNavbar}>
          <ul className="flex flex-col justify-between">
            <li>
              <HamMenuLink name="Home" href="/" />
            </li>
            <li>
              <HamMenuLink name="Blog" href="/blog" />
            </li>
            <li>
              <HamMenuLink name="Contact" href="/contact" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default HamburgerMenuPage;