import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "80px",
        backgroundColor: "#F6F6F6",
      }}
      id="app_bar"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "24px",
          width: "247px",
          height: "56px",
        }}
      >
        <Avatar src={logo} alt="app_logo" sx={{marginLeft:'0.5rem'}} />
        <Typography>Deutsch Cafe</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "12px",
          width: "220px",
          height: "44px",
        }}
      >
        <Button
          sx={{
            width: "91px",
            backgroundColor: "#FFFFFF",
            color: "#CA2B1C",
            borderRadius: "5px",
          }}
        >
          Sign In
        </Button>
        <Button
          sx={{
            width: "117px",
            backgroundColor: "#CA2B1C",
            color: "#FFFFFF",
            borderRadius: "5px",
          }}
        >
          Lets Speak
        </Button>
      </Box>
    </Box>
  );
}
export default Navbar;
