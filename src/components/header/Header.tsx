import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { CustomDrawer } from '../drawer/CustomDrawer';
import { CV_LINK } from '../../constants/links';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { DarkModeOutlined, LightModeOutlined, FileDownloadOutlined } from '@mui/icons-material';
import { Tooltip, useTheme } from '@mui/material';
import { ThemeContext } from '../../theme/ThemeContext';

interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}

const navItems = [
  { label: 'Home', href: '#Home' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact' },
];

export const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  React.useEffect(() => {
    const handleScroll = () => {
      if (window_obj.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const window_obj = window ? window() : globalThis.window;
    if (window_obj) {
      window_obj.addEventListener('scroll', handleScroll);
      return () => window_obj.removeEventListener('scroll', handleScroll);
    }
  }, [window]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        position="sticky"
        sx={{
          top: 0,
          backgroundColor: isDark
            ? scrolled
              ? 'rgba(11, 15, 25, 0.92)'
              : 'rgba(11, 15, 25, 0.75)'
            : scrolled
              ? 'rgba(248, 250, 252, 0.92)'
              : 'rgba(248, 250, 252, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: '64px', md: '72px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1,
                display: { md: 'none' },
                color: 'text.primary',
                '&:hover': { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="#Home"
              sx={{
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.4rem' },
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {'<Wello />'}
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              {navItems.map((item) => (
                <AnchorLink
                  key={item.label}
                  offset={80}
                  style={{ textDecoration: 'none' }}
                  href={item.href}
                >
                  <Button
                    disableRipple
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.925rem',
                      fontWeight: 500,
                      px: 1.8,
                      py: 0.8,
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: isDark
                          ? 'rgba(16, 185, 129, 0.08)'
                          : 'rgba(16, 185, 129, 0.06)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </AnchorLink>
              ))}
            </Box>

            {/* Right Actions (Theme Toggle + Download CV) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
              }}
            >
              <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
                <IconButton
                  onClick={themeContext.toggleTheme}
                  sx={{
                    color: 'primary.main',
                    backgroundColor: isDark
                      ? 'rgba(16, 185, 129, 0.1)'
                      : 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid',
                    borderColor: isDark
                      ? 'rgba(16, 185, 129, 0.2)'
                      : 'rgba(16, 185, 129, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(15deg) scale(1.05)',
                      backgroundColor: isDark
                        ? 'rgba(16, 185, 129, 0.2)'
                        : 'rgba(16, 185, 129, 0.15)',
                    },
                  }}
                >
                  {isDark ? (
                    <LightModeOutlined sx={{ fontSize: '1.25rem' }} />
                  ) : (
                    <DarkModeOutlined sx={{ fontSize: '1.25rem' }} />
                  )}
                </IconButton>
              </Tooltip>

              <Button
                component="a"
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                startIcon={<FileDownloadOutlined />}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  px: 2.2,
                  py: 0.9,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    boxShadow: '0 6px 20px 0 rgba(16, 185, 129, 0.45)',
                  },
                }}
              >
                Download CV
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <CustomDrawer
        handelDrawerToggle={handleDrawerToggle}
        navItems={navItems.map((n) => n.label)}
        mobileOpen={mobileOpen}
        container={container}
      />
    </>
  );
};
