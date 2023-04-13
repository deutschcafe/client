import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../home.png";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "2rem" }}>
          <Typography variant="h3">Hello Deutsch Cafe</Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Get Started</Button>
            <Button variant="outlined">Learn More</Button>
          </Stack>
        </Box>
        <Box sx={{padding:"2rem"}}>
          <img src={img} alt="header_image" width={250} height={260}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
