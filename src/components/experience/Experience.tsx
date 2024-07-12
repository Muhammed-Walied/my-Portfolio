import Box from '@mui/material/Box';
import { ExperienceCard } from './ExperienceCard';
import SectionsHeader from '../SectionsHeader';

type Props = {};

export const Experience = ({}: Props) => {
  return (
    <Box
      id="Experience"
      sx={{
        backgroundColor: 'background.default',
        p: 5,
        scrollSnapAlign: 'center',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SectionsHeader header="Experience" subtitle="Here is a quick summary of my most recent experiences:" />
      <ExperienceCard />
    </Box>
  );
};
