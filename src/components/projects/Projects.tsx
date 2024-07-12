import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { projectsData } from './ProjectsData';
import SectionsHeader from '../SectionsHeader';

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
      }}
    >
      <SectionsHeader header="Projects" subtitle="Things I’ve built so far" />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mt: 5 }}>
        <Grid container spacing={3}>
          {projectsData.map((item) => (
            <Grid item xs={12} sm={6} md={3}>
              <ProjectCard
                image={item.image}
                title={item.title}
                description={item.description}
                tech={item.tech}
                githubLink={item.githubLink}
                livePreview={item.livePreview}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
