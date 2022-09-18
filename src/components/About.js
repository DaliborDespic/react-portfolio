import React from 'react';
import classes from './About.module.scss';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Download } from '../images/file.svg';

const About = () => {
  return (
    <section
      className={`${classes.about} ${classes.container}`}
      id="about"
    >
      <h2 className={classes.section__title}>About</h2>
      <p className={classes.about__subtitle}>I am Dalibor Despic</p>
      <p className={classes.about__profesion}>Frontend developer</p>
      <p className={classes.about__text}>
        Highly motivated person who decided to make a career shift into frontend
        development. Skilled JavaScript, CSS3, HTML5, Sass/Scss, React JS, Git.
        Hard working, honest and friendly person. Always willing to learn new
        skills.
      </p>

      <div className={classes.about__icons}>
        <a
          href="https://github.com/DaliborDespic"
          target="_blank"
          rel="noreferrer"
        >
          <Github className={classes.about__icon} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className={classes.about__icon} />
        </a>
        <a
          href="https://drive.google.com/file/d/1EdHqkcqLmuSM4fD8oDInVwIilZSwWLGC/view?usp=sharing"
          className={classes.cv__download}
          target="_blank"
          rel="noreferrer"
        >
          <Download className={classes.about__icon} />
          <span>CV</span>
        </a>
      </div>
    </section>
  );
};

export default About;
