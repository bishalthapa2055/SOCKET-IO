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
    id: 1,
    username: "suraj",
    name: "Suraj Khadka",
    avatar: image11,
    image: image1,
  },
  {
    id: 2,
    username: "Surekshya",
    name: "surekshya Khadka",
    avatar: image12,
    image: image2,
  },
  {
    id: 3,
    username: "pasang",
    name: "Pasang Norbu Sherpa",
    avatar: image13,
    image: image3,
  },
  {
    id: 4,
    username: "nawal",
    name: "Nawal Shrestha",
    avatar: image14,
    image: image4,
  },
];

const Card = ({ socket, name }) => {
  return (
    <>
      {objects.map((data) => (
        <ImageAvatars
          id={data.id}
          username={data.username}
          name={data.name}
          avatar={data.avatar}
          image={data.image}
          socket={socket}
          user={name}
        />
      ))}
    </>
  );
};

export default Card;
