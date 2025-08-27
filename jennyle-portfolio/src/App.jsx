import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Typography, IconButton, Box, Grid } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { getTheme } from "./theme";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

// ✅ Import images directly from src
import dashboardImg from "./assets/projectImages/dashboard.png";
import formatterImg from "./assets/projectImages/formatter.png";
import processControlImg from "./assets/projectImages/processControl.png";

const projects = [
  {
    title: "🏭 Manufacturing Equipment Dashboard",
    description: "Real-time monitoring dashboard using Streamlit + PostgreSQL.",
    link: "https://jennys-manufacturing-equipment-dashboard.streamlit.app/",
    image: dashboardImg,
  },
  {
    title: "📊 Quality Data Formatter",
    description: "Python ETL pipeline deployed on Streamlit for automated CSV/Excel reports.",
    link: "https://jennys-quality-data-formatter.streamlit.app/",
    image: formatterImg,
  },
  {
    title: "🧩 Process Control Simulator",
    description: "Linux-based process control simulation with automated sensor logging.",
    link: "https://jennys-process-control-sim.streamlit.app/",
    image: processControlImg,
  },
];

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = getTheme(mode);

  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h3" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Graduate Student at St. Ambrose University
        </Typography>
        <IconButton sx={{ mt: 2 }} onClick={toggleTheme}>
          {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </Typography>
      </Container>

      <Box sx={{ mt: 6, px: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}
