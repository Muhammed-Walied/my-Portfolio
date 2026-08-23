import { Box, useTheme } from '@mui/material';
import CustomTypography from './typography/CustomTypography';
import { useResponsiveFont } from '../responsive/useResponsiveFont';

interface IProps {
  header: string;
  subtitle: string;
}

const SectionsHeader = ({ header, subtitle }: IProps) => {
  const getFontStyle = useResponsiveFont();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        maxWidth: '750px',
        mx: 'auto',
        mb: { xs: 4, sm: 5, md: 6 },
        px: 2,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2.5,
          py: 0.75,
          backgroundColor: isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.08)',
          border: '1px solid',
          borderColor: isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.2)',
          borderRadius: '50px',
          boxShadow: isDark ? '0 0 15px rgba(16, 185, 129, 0.15)' : 'none',
          mb: 2,
        }}
      >
        <CustomTypography
          sx={{
            ...getFontStyle('Body3'),
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'primary.main',
          }}
        >
          {header}
        </CustomTypography>
      </Box>

      <CustomTypography
        sx={{
          ...getFontStyle('Subtitle'),
          color: 'text.secondary',
          fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </CustomTypography>
    </Box>
  );
};

export default SectionsHeader;
