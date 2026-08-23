import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTypography = {
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  h1: {
    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontWeight: 600,
  },
  h6: {
    fontWeight: 600,
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body1: {
    lineHeight: 1.7,
    fontWeight: 400,
  },
  body2: {
    lineHeight: 1.6,
    fontWeight: 400,
  },
  button: {
    fontWeight: 600,
    textTransform: 'none' as const,
  },
};

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: 'none' as const,
        fontWeight: 600,
        boxShadow: 'none',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.35)',
          transform: 'translateY(-1px)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 500,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        fontSize: '0.8rem',
        fontWeight: 600,
        borderRadius: '8px',
        padding: '6px 12px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)',
      },
      arrow: {
        color: '#0F172A',
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        fontWeight: 600,
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
      },
    },
  },
};

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#06B6D4',
      light: '#22D3EE',
      dark: '#0891B2',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
  },
  typography: baseTypography,
  components: baseComponents,
});

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#06B6D4',
      light: '#22D3EE',
      dark: '#0891B2',
    },
    background: {
      default: '#0B0F19',
      paper: '#111827',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
    grey: {
      50: '#111827',
      100: '#1E293B',
      200: '#334155',
      300: '#475569',
      400: '#64748B',
      500: '#94A3B8',
      600: '#CBD5E1',
      700: '#E2E8F0',
      800: '#F1F5F9',
      900: '#FFFFFF',
    },
  },
  typography: baseTypography,
  components: baseComponents,
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
