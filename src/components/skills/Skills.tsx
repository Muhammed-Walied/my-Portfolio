import Box from '@mui/material/Box';
import { skillsdata } from './SkillsData';
import SkillsCard from './SkillsCard';
import { Grid } from '@mui/material';
import SectionsHeader from '../SectionsHeader';

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
      }}
    >
      <SectionsHeader
        header="Skills"
        subtitle="The skills, tools and technologies I am really good at:
"
      />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mt: 5 }}>
        <Grid container spacing={3}>
          {skillsdata.map((item) => (
            <Grid item xs={4} sm={3} md={2}>
              <SkillsCard key={item.title} title={item.title} icons={item.icons} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
