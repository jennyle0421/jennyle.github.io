import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", mt: 6, pb: 3 }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 Jenny Le · <a href="mailto:jenny.le0421@gmail.com" style={{ color: "inherit" }}>Contact Me</a>
      </Typography>
    </Box>
  );
}
