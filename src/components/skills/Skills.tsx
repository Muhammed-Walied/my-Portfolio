import Box from '@mui/material/Box';
import { skillsdata } from './SkillsData';
import SkillsCard from './SkillsCard';
import { Grid } from '@mui/material';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';

type Props = {};

export const Skills = ({}: Props) => {
  return (
    <Box
      id="Skills"
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
      <SectionsHeader
        header="Skills"
        subtitle="The skills, tools and technologies I am really good at:"
      />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mt: 5 }}>
        <Grid container spacing={3} justifyContent="center">
          {skillsdata.map((item, index) => (
            <Grid item xs={4} sm={3} md={2} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillsCard title={item.title} icons={item.icons} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
