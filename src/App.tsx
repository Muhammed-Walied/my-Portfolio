import { Box, Divider } from '@mui/material';
import { Header } from './components/header/Header';
import { HeroSection } from './components/heroSection/HeroSection';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { ContactMe } from './components/contactMe/ContactMe';
import { CssBaseline} from '@mui/material';
import { ThemeContextProvider } from './theme/ThemeContext';
import './App.css'
function App() {
  return (
    <ThemeContextProvider>
        <CssBaseline />
        <Box sx={{}}>
        <Header />
        </Box>
        <Box component="main">
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
    </ThemeContextProvider>
  );
}

export default App;
