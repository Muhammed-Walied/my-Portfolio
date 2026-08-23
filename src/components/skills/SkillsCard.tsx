import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { useTheme } from '@mui/material';

type Props = { icons: JSX.Element; title: string };

export default function SkillsCard(props: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 2.5 },
        borderRadius: '16px',
        height: '100%',
        minHeight: { xs: '110px', sm: '125px' },
        backgroundColor: isDark ? 'rgba(30, 41, 59, 0.45)' : 'rgba(255, 255, 255, 0.9)',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
        boxShadow: isDark
          ? '0 4px 20px 0 rgba(0, 0, 0, 0.25)'
          : '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: 'primary.main',
          boxShadow: isDark
            ? '0 12px 30px -5px rgba(16, 185, 129, 0.25), 0 0 15px rgba(16, 185, 129, 0.15)'
            : '0 12px 30px -5px rgba(16, 185, 129, 0.2), 0 4px 12px rgba(0, 0, 0, 0.05)',
          '& .skill-icon': {
            transform: 'scale(1.15)',
          },
        },
      }}
    >
      <Box
        className="skill-icon"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 1.5,
          transition: 'transform 0.3s ease',
        }}
      >
        {props.icons}
      </Box>
      <CustomTypography
        sx={{
          fontSize: { xs: '0.825rem', sm: '0.9rem' },
          fontWeight: 600,
          textAlign: 'center',
          color: 'text.primary',
          letterSpacing: '-0.01em',
        }}
      >
        {props.title}
      </CustomTypography>
    </Box>
  );
}
