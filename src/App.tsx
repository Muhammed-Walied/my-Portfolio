import React, { Suspense } from 'react';
import { Box, Divider } from '@mui/material';
import { Header } from './components/header/Header';
import { HeroSection } from './components/heroSection/HeroSection';
import { Skills } from './components/skills/Skills';
import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme/ThemeContext';
import './App.css';

// Lazy-load below-the-fold components to maximize Lighthouse performance
const Experience = React.lazy(() =>
  import('./components/experience/Experience').then((module) => ({ default: module.Experience }))
);
const Projects = React.lazy(() =>
  import('./components/projects/Projects').then((module) => ({ default: module.Projects }))
);
const ContactMe = React.lazy(() =>
  import('./components/contactMe/ContactMe').then((module) => ({ default: module.ContactMe }))
);
const Footer = React.lazy(() =>
  import('./components/footer/Footer').then((module) => ({ default: module.Footer }))
);

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
          
          <Suspense fallback={<Box sx={{ minHeight: '200px' }} />}>
            <Experience />
            <Divider sx={{ width: '100%', borderColor: 'divider' }} />
            <Projects />
            <Divider sx={{ width: '100%', borderColor: 'divider' }} />
            <ContactMe />
          </Suspense>
        </Box>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Box>
    </ThemeContextProvider>
  );
}

export default App;
