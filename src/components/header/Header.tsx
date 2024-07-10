import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CustomDrawer } from '../drawer/CustomDrawer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

import { grey } from '@mui/material/colors';
import { useResponsiveStack } from '../../responsive';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { Tooltip, useTheme } from '@mui/material';
import { ThemeContext } from '../../theme/ThemeContext';
interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}
const navItems = ['Home', 'Skills', 'Experience', 'Projects', 'Contact'];

export const Header = (props: Props) => {
  const { window } = props;
  const { isSmallDown } = useResponsiveStack();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const getStyle = useResponsiveFont();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <AppBar component="nav" sx={{ backgroundColor: 'transparent' }} elevation={0} position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            disableRipple
          >
            <MenuIcon sx={{ color: 'grey.600' }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: 'grey.900',
            }}
          >
            {'<Wello />'}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            {navItems.map((item) => (
              <AnchorLink offset={50} style={{ color: 'grey.600', marginRight: 5, marginLeft: 5 }} href={`#${item}`}>
                <Button disableRipple key={item} sx={{ color: 'grey.600', ...getStyle('Body3') }}>
                  {item}
                </Button>
              </AnchorLink>
            ))}
          </Box>
          <Box
            sx={{
              display: isSmallDown ? 'none' : 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Tooltip title={`Change ${themeContext?.currentTheme?.palette.mode} Mode`}>
              <IconButton onClick={themeContext?.toggleTheme} color="inherit" sx={{ mr: 2 }} disableRipple>
                {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined color="action" />}
              </IconButton>
            </Tooltip>
            <Button
              sx={{
                color: grey[50],
                bgcolor: grey[900],
                borderRadius: '10px',
                px: 2,
                ...getStyle('Body3'),

                '&:hover': { bgcolor: grey[900] },
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
        </Toolbar>
      </AppBar>
      <CustomDrawer
        handelDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        mobileOpen={mobileOpen}
        container={container}
      />
    </Box>
  );
};
