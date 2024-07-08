import { Box, CssBaseline, Divider, Toolbar } from "@mui/material";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/heroSection/HeroSection";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";

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
        <Experience />
        <br />
        <Divider sx={{ width: "100%" }} />
        <br />
        <Projects />
      </Box>
    </Box>
  );
}

export default App;
