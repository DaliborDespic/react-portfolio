import React, { useState } from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-scroll';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={classes.header}>
      <div className={`${classes.header__content} ${classes.container}`}>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className={classes.header__logo}
        >
          <img
            src={Logo}
            alt=""
            width="40px"
            height="40px"
          />
        </Link>

        <nav className={`${classes.nav} ${menuOpen ? classes.active : ''}`}>
          <ul className={classes.nav__list}>
            <li className={classes.nav__item}>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.nav__link}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Home
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.nav__link}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                About
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.nav__link}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Skills
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.nav__link}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <div className={classes.nav__hamburger}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
