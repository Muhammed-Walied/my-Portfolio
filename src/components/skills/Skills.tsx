import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CustomTypography from '../typography/CustomTypography';
import { skillsdata } from './SkillsData';
import SkillsCard from './SkillsCard';
import { Grid } from '@mui/material';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { useResponsiveStack } from '../../responsive';

type Props = {};

export const Skills = ({}: Props) => {
  const getFontStyle = useResponsiveFont();
  const { isMediumDown } = useResponsiveStack();
  return (
    <Box id="Skills" sx={{ backgroundColor: 'background.paper', py: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '75px',
            height: '35px',
            backgroundColor: 'grey.200',
            color: 'grey.600',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': { backgroundColor: 'grey.200' },
          }}
        >
          <CustomTypography
            sx={{
              ...getFontStyle('Body3'),
              textTransform: 'capitalize',
              color: 'grey.600',
            }}
          >
            Skills
          </CustomTypography>
        </Box>
        <CustomTypography
          sx={{
            ...getFontStyle('Subtitle'),
            marginTop: 1,
            color: 'grey.600',
            textAlign: isMediumDown ? 'center' : 'inherit',
          }}
        >
          The skills, tools and technologies I am really good at:
        </CustomTypography>
      </Box>
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
