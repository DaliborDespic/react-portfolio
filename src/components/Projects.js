import React from 'react';
import classes from './Projects.module.scss';
import coffee from './../images/coffee.png';
import sloba from './../images/Sloba_MIric.png';
import designer from './../images/Designer2.png';
import homemade from './../images/Homemade.png';
import cat from './../images/Cat_app.png';
import food from './../images/healty_food.png';

const Projects = () => {
  return (
    <section
      className={`${classes.projects} ${classes.container}`}
      id="project"
    >
      <h2 className={classes.section__title}>Projects</h2>

      <div className={classes.projects__content}>
        <div className={classes.project}>
          <img
            src={coffee}
            alt=""
            className={classes.project__image}
          />

          <div className={classes.project__link}>
            <a
              true="true"
              href=" https://dalibordespic.github.io/Coffee-shop/"
              target="_blank"
            >
              View details
            </a>
          </div>
        </div>
        <div className={classes.project}>
          <img
            src={sloba}
            alt=""
            className={classes.project__image}
          />

          <div className={classes.project__link}>
            <a
              true="true"
              href="https://dalibordespic.github.io/Sloba-js"
              target="_blank"
              rel="noreferrer"
            >
              View details
            </a>
          </div>
        </div>
        <div className={classes.project}>
          <img
            src={designer}
            alt=""
            className={classes.project__image}
          />

          <div className={classes.project__link}>
            <a
              true="true"
              href="https://dalibordespic.github.io/Designer/"
              target="_blank"
              rel="noreferrer"
            >
              View details
            </a>
          </div>
        </div>
        <div className={classes.project}>
          <img
            src={homemade}
            alt=""
            className={classes.project__image}
          />

          <div className={classes.project__link}>
            <a
              true="true"
              href="https://dalibordespic.github.io/Handmade/"
              target="_blank"
              rel="noreferrer"
            >
              View details
            </a>
          </div>
        </div>
        <div className={classes.project}>
          <img
            src={cat}
            alt=""
            className={classes.project__image}
          />

          <div className={classes.project__link}>
            <a
              true="true"
              href=" https://dalibordespic.github.io/Cat-app/"
              target="_blank"
              rel="noreferrer"
            >
              View details
            </a>
          </div>
        </div>
        <div className={classes.project}>
          <img
            src={food}
            alt=""
            className={classes.project__image}
          />

          <div className={classes.project__link}>
            <a
              true="true"
              href=" https://dalibordespic.github.io/Healty-food-restaurant/"
              target="_blank"
              rel="noreferrer"
            >
              View details
            </a>
          </div>
        </div>
      </div>

      <a
        true="true"
        href="https://github.com/DaliborDespic?tab=repositories"
        className={classes.projects__viewMore}
        target="_blank"
        rel="noreferrer"
      >
        View More Projects
      </a>
    </section>
  );
};

export default Projects;
