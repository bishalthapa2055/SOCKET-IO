import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "./header";
import Cards from "./card";
const Index = ({ name }) => {
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
      <Cards />
    </>
  );
};

export default Index;
