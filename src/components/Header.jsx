import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import headerImage from "../assets/header_image.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F6F6F6",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "606px" }}>
        <Typography variant="h5" sx={{ fontSize: "60px" }}>
          The next level of German speaking practice with shadowing
        </Typography>
        <Box sx={{ padding: "1rem" }}>
          <Button
            sx={{
              width: "117px",
              backgroundColor: "#CA2B1C",
              color: "#FFFFFF",
              borderRadius: "5px",
            }}
          >
            Get Started
          </Button>
          <Button
            sx={{
              width: "171px",
              backgroundColor: "#FFFFFF",
              color: "#CA2B1C",
              borderRadius: "5px",
              marginLeft: "0.5rem",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Box
        component="img"
        src={headerImage}
        alt="header_image"
        sx={{ width: "700px", height: "415px" }}
      />
    </Box>
  );
};

export default Header;
