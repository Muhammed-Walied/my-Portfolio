import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { skillsdata } from './SkillsData';
import SkillsCard from './SkillsCard';
import { Grid } from '@mui/material';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <Box
      id="Skills"
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, sm: 10, md: 14 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionsHeader
          header="Skills & Tech Stack"
          subtitle="The technologies, languages, and developer tools I leverage to build robust applications:"
        />

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} justifyContent="center">
          {skillsdata.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                style={{ height: '100%' }}
              >
                <SkillsCard title={item.title} icons={item.icons} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
