import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { projectsData } from './ProjectsData';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';

type Props = {};

export const Projects = ({}: Props) => {
  return (
    <Box
      id="Projects"
      sx={{
        backgroundColor: 'background.paper',
        p: 5,
        scrollSnapAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SectionsHeader header="Projects" subtitle="Things I’ve built so far" />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mt: 5 }}>
        <Grid container spacing={3} justifyContent="center">
          {projectsData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  tech={item.tech}
                  githubLink={item.githubLink}
                  livePreview={item.livePreview}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
