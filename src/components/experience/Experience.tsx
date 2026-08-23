import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ExperienceCard } from './ExperienceCard';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';
import { experienceData } from './ExperienceData';

export const Experience = () => {
  return (
    <Box
      id="Experience"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, sm: 10, md: 14 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <SectionsHeader
          header="Experience"
          subtitle="A track record of shipping impactful mobile and web products:"
        />

        <Box sx={{ width: '100%', mt: 2 }}>
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.company + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ExperienceCard
                experience={experience}
                isLast={index === experienceData.length - 1}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
