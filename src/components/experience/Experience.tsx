import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { ExperienceCard } from './ExperienceCard';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { useResponsiveStack } from '../../responsive';

type Props = {};

export const Experience = ({}: Props) => {
  const getFontStyle = useResponsiveFont();
  const { isMediumDown } = useResponsiveStack();

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
            width: '95px',
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
            Experience
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
          Here is a quick summary of my most recent experiences:
        </CustomTypography>
      </Box>
      <ExperienceCard />
    </Box>
  );
};
