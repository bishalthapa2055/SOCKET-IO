import React from "react";
import image1 from "../../assets/hs1.png";
import image2 from "../../assets/hs2.png";
import image3 from "../../assets/hs3.png";
import image4 from "../../assets/hs4.png";

import image11 from "../../assets/n1.png";
import image12 from "../../assets/n2.png";
import image13 from "../../assets/n3.png";
import image14 from "../../assets/n4.png";
import ImageAvatars from "./cards";

const objects = [
  {
    name: "Suraj Khadka",
    avatar: image11,
    image: image1,
  },
  {
    name: "Surekshya Khadka",
    avatar: image12,
    image: image2,
  },
  {
    name: "Pasang Norbu Sherpa",
    avatar: image13,
    image: image3,
  },
  {
    name: "Nawal Shrestha",
    avatar: image14,
    image: image4,
  },
];

const Card = () => {
  return (
    <>
      {objects.map((data) => (
        <ImageAvatars
          name={data.name}
          avatar={data.avatar}
          image={data.image}
        />
      ))}
    </>
  );
};

export default Card;
