import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { grey } from '@mui/material/colors';
import { Button, IconButton, Tooltip, useTheme } from '@mui/material';
import CustomTypography from '../typography/CustomTypography';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import React from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const drawerWidth = 250;

type Props = {
  container?: (() => HTMLElement) | undefined;
  handelDrawerToggle: () => void;
  mobileOpen: boolean;
  navItems: string[];
};

export const CustomDrawer = ({ container, handelDrawerToggle, mobileOpen, navItems }: Props) => {
  const getStyle = useResponsiveFont();
  const theme = useTheme();
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handelDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'background.default' },
        }}
      >
        <Box onClick={handelDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="div" sx={{ m: 2, textAlign: 'left', color: 'text.primary' }}>
            {' '}
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem sx={{ display: 'block', textAlign: 'left' }} key={item} disablePadding>
                <AnchorLink offset={50} style={{ color: 'text.secondary', textDecoration: 'none' }} href={`#${item}`}>
                  <ListItemButton
                    sx={{ textAlign: 'left', textDecoration: 'none', color: 'text.secondary', width: '95%', marginX: 'auto' }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </AnchorLink>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              px: 2,
              alignItems: 'center',
            }}
          >
            <CustomTypography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Change Theme
            </CustomTypography>
            <Tooltip title={`Change to ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`}>
              <IconButton onClick={themeContext.toggleTheme} color="inherit" sx={{ mr: 2 }} disableRipple>
                {theme.palette.mode === 'dark' ? <LightModeOutlined sx={{color:'#00e676'}} /> : <DarkModeOutlined sx={{color:'#00e676'}} />}
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              my: 2,
            }}
          >
            <Button
              sx={{
                color: grey[50],
                bgcolor: 'primary.main',
                borderRadius: '10px',
                width: '90%',
                ...getStyle('Body3'),
                mx: 'auto',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
              disableRipple
              variant="contained"
            >
              <a
                style={{ color: grey[50], textDecoration: 'none' }}
                href="/MuhammedMahrousResume.pdf"
                target="_blank"
                download
              >
                Download cv
              </a>
            </Button>
          </Box>
        </Box>
      </Drawer>
    </nav>
  );
};

