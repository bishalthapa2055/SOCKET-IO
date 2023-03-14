import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "./header";
import Cards from "./card";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
const Index = ({ name }) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.emit("addNewUser", name);
  }, [socket, name]);
  return (
    <>
      <Typography
        sx={{
          position: "fixed",
          fontWeight: 700,
          right: "50px",
          color: "red",
          height: "20px",
        }}
      >
        {name}
      </Typography>
      <Header />
      <Cards socket={socket} name={name} />
    </>
  );
};

export default Index;
