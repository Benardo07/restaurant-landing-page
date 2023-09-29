import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { Element } from 'react-scroll';
const Testimonial = () => {
  return (
    <Element name="testimonial">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Some positive review from user
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          The menu at Foodiz is a testament to their commitment to promoting well-being through food. 
          It's a refreshing change to find a restaurant that offers a wide range of delectable, health-conscious options. 
          Each dish I've tried has been a culinary masterpiece, bursting with flavors and packed with nutrients.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
    </Element>
  );
};

export default Testimonial;
