import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "My Portfolio",
    image: image1,
    url: "https://portfolio-puce-iota-63.vercel.app/",
  },
  {
    id: 2,
    title: "ecommerce",
    image: image2,
    url: "https://vercel.com/juanma-cyber/virtual-shop",
  },
  {
    id: 3,
    title: "Linkedin",
    image: image3,
    url: "https://www.linkedin.com/in/juan-manuel-ram%C3%ADrez-0788511b5/",
  },
  
  
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;