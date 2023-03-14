import { Container, Box, Typography } from "@mui/material";
import AllData from "../src/components";

import { useEffect, useState } from "react";
import LogIn from "./components/login";
function App() {
  const [user, setUser] = useState();

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
