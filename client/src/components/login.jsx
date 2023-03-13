import * as React from "react";
import { TextField, Box, Button } from "@mui/material";
import Alldata from "./index";
export default function LogIn() {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {open ? (
        <Alldata name={name} />
      ) : (
        <>
          <>
            <Box
              component="form"
              sx={{
                position: "relative",
                // border: "2px solid black",
                top: "120px",
                width: "100%",
                height: "300px",
                // backgroundColor: "grey",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Enter Your Name"
                variant="outlined"
                sx={{
                  position: "relative",
                  top: "35%",
                  left: "10%",
                  width: "80%",
                }}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  top: "65%",
                  left: "31%",
                  width: "150px",
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                LOGIN
              </Button>
            </Box>
          </>
        </>
      )}
    </>
  );
}
