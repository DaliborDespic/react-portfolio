import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Download } from '../images/file.svg';
// import { ReactComponent as Cv } from '../cv/CV-en.pdf';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={`${classes.footer__content} ${classes.container}`}>
        <div className={classes.footer__data}>
          <p className={classes.footer__data__title}>Dalibor Despic</p>
          <p className={classes.footer__data__text}>
            I am Dalibor Despic and this is my personal website
          </p>
        </div>
        <div className={classes.footer__data}>
          <p className={classes.footer__data__title}>Explore</p>
          <ul className={classes.footer__data__list}>
            <li className={classes.footer__data__item}>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.footer__data__link}
              >
                Home
              </Link>
            </li>
            <li className={classes.footer__data__item}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.footer__data__link}
              >
                About
              </Link>
            </li>
            <li className={classes.footer__data__item}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.footer__data__link}
              >
                Skills
              </Link>
            </li>
            <li className={classes.footer__data__item}>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={classes.footer__data__link}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer__data}>
          <p className={classes.footer__data__title}>Follow me</p>
          <div className={classes.footer__data__icons}>
            <a
              href="https://github.com/DaliborDespic"
              target="_blank"
              rel="noreferrer"
            >
              <Github className={classes.footer__icon} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className={classes.footer__icon} />
            </a>
            <a
              href="https://drive.google.com/file/d/1EdHqkcqLmuSM4fD8oDInVwIilZSwWLGC/view?usp=sharing"
              className={classes.cv__download}
              target="_blank"
              rel="noreferrer"
            >
              <Download className={classes.footer__icon} />
              <span>CV</span>
            </a>
          </div>
        </div>
        <div className={classes.footer__data}>
          <p className={classes.footer__data__title}>Contact</p>

          <div className={classes.footer__data__contact}>
            <p className={classes.footer__contact__subtitle}>Email:</p>
            <span className={classes.footer__contact__text}>
              dalibordespic84@gmail.com
            </span>

            <p className={classes.footer__contact__subtitle}>Phone:</p>
            <span className={classes.footer__contact__text}>
              +381 63 717 86 01
            </span>

            <p className={classes.footer__contact__subtitle}>Adress:</p>
            <span className={classes.footer__contact__text}>
              Arse Teodorovica 27, Novi Sad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
