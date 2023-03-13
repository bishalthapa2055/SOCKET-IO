import { Container, Box, Typography } from "@mui/material";
import AllData from "../src/components";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import LogIn from "./components/login";
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log("[socket]", socket);
  }, []);
  return (
    <>
      <Container maxWidth="xs">
        {user ? (
          <>
            <Box
              sx={{ backgroundColor: "aqua", height: "100vh", width: "100%" }}
            >
              <AllData />
            </Box>
          </>
        ) : (
          <LogIn />
        )}
      </Container>
    </>
  );
}

export default App;
