import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { Chip, useTheme } from '@mui/material';
import { MdCheckCircleOutline, MdWorkOutline } from 'react-icons/md';

type Props = {
  experience: {
    company: string;
    position: string;
    date: string;
    description: string[];
  };
  isLast?: boolean;
};

export const ExperienceCard = ({ experience, isLast = false }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        pl: { xs: 4, sm: 5 },
        pb: isLast ? 0 : { xs: 5, sm: 6 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '24px',
          left: '11px',
          bottom: isLast ? '24px' : 0,
          width: '2px',
          background: isDark
            ? 'linear-gradient(180deg, #10B981 0%, rgba(16, 185, 129, 0.2) 100%)'
            : 'linear-gradient(180deg, #10B981 0%, rgba(16, 185, 129, 0.2) 100%)',
          display: isLast ? 'none' : 'block',
        },
      }}
    >
      {/* Node Dot / Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: '18px',
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: isDark ? '#0B0F19' : '#FFFFFF',
          border: '2px solid #10B981',
          boxShadow: '0 0 12px rgba(16, 185, 129, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10B981',
          }}
        />
      </Box>

      {/* Card Content */}
      <Box
        sx={{
          width: '100%',
          p: { xs: 2.5, sm: 3.5 },
          borderRadius: '16px',
          backgroundColor: isDark ? 'rgba(30, 41, 59, 0.45)' : 'rgba(255, 255, 255, 0.9)',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
          boxShadow: isDark
            ? '0 4px 20px 0 rgba(0, 0, 0, 0.25)'
            : '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(16, 185, 129, 0.4)',
            transform: 'translateY(-2px)',
            boxShadow: isDark
              ? '0 10px 30px -5px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.15)'
              : '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 0 15px rgba(16, 185, 129, 0.1)',
          },
        }}
      >
        {/* Header with Title, Company and Date */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
            mb: 2,
          }}
        >
          <Box>
            <CustomTypography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 0.5,
              }}
            >
              {experience.position.charAt(0).toUpperCase() + experience.position.slice(1)} • {experience.company}
            </CustomTypography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                icon={<MdWorkOutline size={14} style={{ color: '#10B981' }} />}
                label={experience.company}
                size="small"
                sx={{
                  backgroundColor: isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.08)',
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  borderRadius: '6px',
                }}
              />
            </Box>
          </Box>

          <Chip
            label={experience.date}
            size="small"
            sx={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: '0.8rem',
              borderRadius: '20px',
              px: 0.5,
            }}
          />
        </Box>

        {/* Bullet descriptions */}
        <Box sx={{ mt: 2 }}>
          {experience.description.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 1.5,
                '&:last-child': { mb: 0 },
              }}
            >
              <Box
                sx={{
                  mr: 1.5,
                  mt: 0.3,
                  color: '#10B981',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <MdCheckCircleOutline size={18} />
              </Box>
              <CustomTypography
                sx={{
                  fontSize: { xs: '0.875rem', sm: '0.925rem' },
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {item}
              </CustomTypography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
