import { Box, Divider, Toolbar } from '@mui/material';
import { Header } from './components/header/Header';
import { HeroSection } from './components/heroSection/HeroSection';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { ContactMe } from './components/contactMe/ContactMe';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeContextProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Box>
        <CssBaseline />
        <Header />
        <Box component="main" sx={{ height: '100vh' }}>
          <Toolbar />
          <HeroSection />
          <Divider sx={{ width: '100%' }} />
          <Skills />
          <Divider sx={{ width: '100%' }} />
          <Experience />
          <Divider sx={{ width: '100%' }} />
          <Projects />
          <Divider sx={{ width: '100%' }} />
          <ContactMe />
        </Box>
      </Box>
    </ThemeContextProvider>
  );
}

export default App;
