import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
          </ul>

          <ul className="cards__items single">
            <CardItem
              src="images/img-4.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
