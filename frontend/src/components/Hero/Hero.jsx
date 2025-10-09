import React from "react";
import "./Hero.css";
import profile_img from "../../assets/hero_1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_img" />
      <h1>
        <span>I'am Abdul Bari,</span> Web Developer based on International.{" "}
      </h1>
      <p>I am a Web developer from Kolkata , with 10 years of Experience </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
