import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { projectsData } from './ProjectsData';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <Box
      id="Projects"
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
          header="Featured Projects"
          subtitle="A selection of recent mobile and web applications I've engineered and built:"
        />

        <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }} alignItems="stretch">
          {projectsData.map((item, index) => (
            <Grid item xs={12} sm={6} lg={6} key={item.id} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%', width: '100%', display: 'flex' }}
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
      </Container>
    </Box>
  );
};
