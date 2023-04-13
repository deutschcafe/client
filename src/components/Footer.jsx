import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import logo from "../assets/logo.png";
import { Avatar } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
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
          <Avatar src={logo} alt="app_logo" sx={{ marginLeft: "0.5rem" }} />
          <Typography>Deutsch Cafe</Typography>
        </Box>
        <Typography>Ready to ger started?</Typography>
        <Box></Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Footer;
