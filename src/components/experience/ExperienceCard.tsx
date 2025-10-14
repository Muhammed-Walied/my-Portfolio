import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';

type Props = {
  experience: {
    company: string;
    position: string;
    date: string;
    description: string[];
  };
};

export const ExperienceCard = ({ experience }: Props) => {
  const getFontStyle = useResponsiveFont();

  return (
    <Box
      sx={{
        pl: 5,
        mb: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '8px',
          left: '10px',
          height: '16px',
          width: '16px',
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          border: '2px solid #121212',
        },
      }}
    >
      <CustomTypography
        sx={{
          ...getFontStyle('Body2'),
          color: 'primary.main',
        }}
      >
        {experience.company}
      </CustomTypography>
      <CustomTypography
        sx={{
          ...getFontStyle('Subtitle'),
          color: 'text.secondary',
        }}
      >
        {experience.position}
      </CustomTypography>

      <CustomTypography
        sx={{
          ...getFontStyle('Body2'),
          color: 'text.secondary',
        }}
      >
        {experience.date}
      </CustomTypography>
      <CustomTypography
        sx={{
          ...getFontStyle('Body2'),
          color: 'text.secondary',
          marginTop: 2,
        }}
      >
        {experience.description.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
            <Box sx={{ mr: 1, color: 'primary.main' }}>•</Box>
            {item}
          </Box>
        ))}
      </CustomTypography>
    </Box>
  );
};
