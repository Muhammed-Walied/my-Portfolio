import { useTheme, useMediaQuery } from '@mui/material';

interface FontStyles {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontWeight?: number | string;
}

export function useResponsiveFont() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isMd = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const isLg = useMediaQuery(theme.breakpoints.down('lg')); // < 1200px

  const getFontStyle = (
    type: 'H1' | 'H2' | 'H3' | 'Subtitle' | 'Body1' | 'Body2' | 'Body3'
  ): FontStyles => {
    switch (type) {
      case 'H1':
        return {
          fontSize: isXs ? '1.875rem' : isMd ? '2.5rem' : isLg ? '3.25rem' : '3.75rem', // 30px -> 40px -> 52px -> 60px
          lineHeight: isXs ? '1.2' : '1.15',
          letterSpacing: '-0.03em',
          fontWeight: 800,
        };
      case 'H2':
        return {
          fontSize: isXs ? '1.5rem' : isMd ? '1.875rem' : '2.25rem', // 24px -> 30px -> 36px
          lineHeight: '1.25',
          letterSpacing: '-0.02em',
          fontWeight: 700,
        };
      case 'H3':
        return {
          fontSize: isXs ? '1.25rem' : isMd ? '1.5rem' : '1.75rem',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: 600,
        };
      case 'Subtitle':
        return {
          fontSize: isXs ? '0.95rem' : isMd ? '1.05rem' : '1.125rem',
          lineHeight: '1.6',
          fontWeight: 400,
        };
      case 'Body1':
        return {
          fontSize: isXs ? '0.875rem' : '1rem',
          lineHeight: '1.6',
          fontWeight: 400,
        };
      case 'Body2':
        return {
          fontSize: isXs ? '0.875rem' : '0.95rem',
          lineHeight: '1.6',
          fontWeight: 400,
        };
      case 'Body3':
        return {
          fontSize: isXs ? '0.75rem' : '0.875rem',
          lineHeight: '1.5',
          fontWeight: 500,
        };
      default:
        return { fontSize: '1rem', lineHeight: '1.5', fontWeight: 400 };
    }
  };

  return getFontStyle;
}
