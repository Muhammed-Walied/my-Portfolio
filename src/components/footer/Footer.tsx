import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomTypography from '../typography/CustomTypography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 4, sm: 5 },
        borderTop: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2.5,
          }}
        >
          {/* Logo & Copyright */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <CustomTypography
              sx={{
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: '1.15rem',
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5,
              }}
            >
              {'<Wello />'}
            </CustomTypography>
            <CustomTypography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
              © {new Date().getFullYear()} Muhammed Walied. All rights reserved.
            </CustomTypography>
          </Box>

          {/* Social Links & Back to Top */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/Muhammed-Walied"
                target="_blank"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <FaGithub size={18} />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://linkedin.com/in/muhammed-walied-281213277"
                target="_blank"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: '#06B6D4' },
                }}
              >
                <FaLinkedin size={18} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Email">
              <IconButton
                component="a"
                href="mailto:muhammedmahrous48@gmail.com"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <FaEnvelope size={16} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Back to Top">
              <IconButton
                onClick={scrollToTop}
                size="small"
                sx={{
                  ml: 1,
                  backgroundColor: isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.2)',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <MdKeyboardArrowUp size={20} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
