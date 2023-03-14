import React from "react";
import Card from "./card";
import ImageAvatars from "./cards";

const Index = ({ socket, name }) => {
  return (
    <div>
      {/* <ImageAvatars /> */}
      <Card socket={socket} name={name} />
    </div>
  );
};

export default Index;
