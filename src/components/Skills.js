import React from 'react';
import classes from './Skills.module.scss';
import { ReactComponent as Css } from '../images/css3-alt.svg';
import { ReactComponent as Html } from '../images/html5.svg';
import { ReactComponent as Git } from '../images/git-alt.svg';
import { ReactComponent as ReactJs } from '../images/react.svg';
import { ReactComponent as Scss } from '../images/sass.svg';
import { ReactComponent as Js } from '../images/js.svg';
import { ReactComponent as Photoshop } from '../images/photoshop.svg';
import { ReactComponent as Figma } from '../images/figma.svg';

const Skills = () => {
  return (
    <section
      className={`${classes.skills} ${classes.container}`}
      id="skills"
    >
      <h2 className={classes.section__title}>Skills</h2>
      <div className={classes.skills__icons}>
        <Css className={classes.skills__icon} />
        <Html className={classes.skills__icon} />
        <Js className={classes.skills__icon} />
        <Git className={classes.skills__icon} />
        <ReactJs className={classes.skills__icon} />
        <Scss className={classes.skills__icon} />
        <Figma className={classes.skills__icon} />
        <Photoshop className={classes.skills__icon} />
      </div>
    </section>
  );
};

export default Skills;
