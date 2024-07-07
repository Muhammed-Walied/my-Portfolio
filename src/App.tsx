import { useState } from "react";
import { Box, CssBaseline, Divider, Toolbar, Typography } from "@mui/material";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/heroSection/HeroSection";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 5, height: "100vh", bgcolor: "#ffffff" }}>
        <Toolbar />
        <HeroSection />
        <br />
        <Divider sx={{ width: "100%" }} />
        <br />
        <Skills />
        <br />
        <Divider sx={{ width: "100%" }} />
        <br />
      </Box>
    </Box>
  );
}

export default App;
