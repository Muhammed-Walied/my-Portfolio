import { Box, Divider } from '@mui/material';
import { Header } from './components/header/Header';
import { HeroSection } from './components/heroSection/HeroSection';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { ContactMe } from './components/contactMe/ContactMe';
import { Footer } from './components/footer/Footer';
import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <HeroSection />
          <Divider sx={{ width: '100%', borderColor: 'divider' }} />
          <Skills />
          <Divider sx={{ width: '100%', borderColor: 'divider' }} />
          <Experience />
          <Divider sx={{ width: '100%', borderColor: 'divider' }} />
          <Projects />
          <Divider sx={{ width: '100%', borderColor: 'divider' }} />
          <ContactMe />
        </Box>
        <Footer />
      </Box>
    </ThemeContextProvider>
  );
}

export default App;
