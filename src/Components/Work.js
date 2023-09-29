import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { Element } from 'react-scroll';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select food on this website , then booking.",
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "There are various kinds of menus that you can choose from. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We guarantee the delivery time is less than half an hour",
    },
  ];
  return (
    <Element name="work">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        You no longer have to come in person to buy food, because now you can order online.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </Element>
  );
};

export default Work;
