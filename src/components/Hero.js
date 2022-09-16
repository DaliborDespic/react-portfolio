import React from 'react';
import classes from './Hero.module.scss';
import profilePicture from '../images/picture.png';

const Hero = () => {
  return (
    <section
      className={`${classes.hero} ${classes.container}`}
      id="hero"
    >
      <div className={classes.hero__description}>
        <h1>HELLO!</h1>
        <p>
          My name is <span>Dalibor</span>
        </p>
        <p>Welcome to my web site</p>
      </div>

      <div className={classes.hero__picture}>
        <img
          src={profilePicture}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
