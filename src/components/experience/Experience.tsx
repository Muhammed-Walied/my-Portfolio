import Box from '@mui/material/Box';
import { ExperienceCard } from './ExperienceCard';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';
import { experienceData } from './ExperienceData';
import { useResponsiveStack } from '../../responsive';


export const Experience = () => {
  const { isSmallDown } = useResponsiveStack();
  return (
    <Box
      id="Experience"
      sx={{
        backgroundColor: 'background.default',
        p: 5,
        scrollSnapAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SectionsHeader header="Experience" subtitle="Here is a quick summary of my most recent experiences:" />
      <Box
        sx={{
          width: isSmallDown ? '100%' : '85%',
          mx: 'auto',
          mt: 5,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '18px',
            height: '100%',
            width: '2px',
            backgroundColor: 'primary.main',
          },
        }}
      >
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
