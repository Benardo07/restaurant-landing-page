import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Healthy Food is Important
        </h1>
        <p className="primary-text">
          Welcome to Foodiz, where culinary art meets passion. Our story is one of flavor, freshness, and a deep love for food. We believe that every meal 
          should be an exquisite experience, and that's exactly what we strive to deliver with every dish we serve.At Foodiz, we take pride in crafting 
          mouthwatering dishes that awaken your taste buds and leave you craving for more. Our talented chefs source the finest ingredients, 
          creating a menu that's a fusion of traditional recipes and contemporary twists.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  ,/</Element>
  );
};

export default About;
