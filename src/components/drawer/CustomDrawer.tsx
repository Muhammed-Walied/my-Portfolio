import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button, IconButton, Tooltip, useTheme } from '@mui/material';
import CustomTypography from '../typography/CustomTypography';
import React from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import { DarkModeOutlined, LightModeOutlined, Close, FileDownloadOutlined } from '@mui/icons-material';

const drawerWidth = 280;

type Props = {
  container?: (() => HTMLElement) | undefined;
  handelDrawerToggle: () => void;
  mobileOpen: boolean;
  navItems: string[];
};

export const CustomDrawer = ({ container, handelDrawerToggle, mobileOpen, navItems }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handelDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: isDark ? '#0B0F19' : '#FFFFFF',
            backgroundImage: 'none',
            borderRight: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          {/* Header in Drawer */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pb: 2,
              mb: 2,
              borderBottom: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {'<Wello />'}
            </Typography>
            <IconButton onClick={handelDrawerToggle} size="small" sx={{ color: 'text.secondary' }}>
              <Close fontSize="small" />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List sx={{ pt: 1 }}>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                <AnchorLink
                  offset={80}
                  style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                  href={`#${item}`}
                  onClick={handelDrawerToggle}
                >
                  <ListItemButton
                    sx={{
                      borderRadius: '10px',
                      py: 1.2,
                      px: 2,
                      color: 'text.primary',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: isDark
                          ? 'rgba(16, 185, 129, 0.12)'
                          : 'rgba(16, 185, 129, 0.08)',
                        color: 'primary.main',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: '0.95rem',
                      }}
                    />
                  </ListItemButton>
                </AnchorLink>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Footer in Drawer (Theme & CV) */}
        <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
              px: 1,
            }}
          >
            <CustomTypography
              variant="body2"
              sx={{ color: 'text.secondary', fontWeight: 500 }}
            >
              {isDark ? 'Dark Theme' : 'Light Theme'}
            </CustomTypography>
            <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
              <IconButton
                onClick={themeContext.toggleTheme}
                sx={{
                  color: 'primary.main',
                  backgroundColor: isDark
                    ? 'rgba(16, 185, 129, 0.1)'
                    : 'rgba(16, 185, 129, 0.08)',
                }}
              >
                {isDark ? <LightModeOutlined /> : <DarkModeOutlined />}
              </IconButton>
            </Tooltip>
          </Box>

          <Button
            component="a"
            href="/MuhammedMahrousResume.pdf"
            target="_blank"
            download
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<FileDownloadOutlined />}
            sx={{
              py: 1.2,
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.9rem',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.3)',
            }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>
    </nav>
  );
};
