import { Avatar, Button, IconButton, Tooltip, Container, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaEnvelope, FaJava } from 'react-icons/fa6';
import { SiSpringboot } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { LuDownload } from 'react-icons/lu';
import { AnimationText } from '../animation/AnimationText';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTheme } from '@mui/material/styles';

export const HeroSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="Home"
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        py: { xs: 6, sm: 8, md: 12, lg: 16 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Gradient Blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: { xs: '300px', md: '500px' },
          height: { xs: '300px', md: '500px' },
          background: isDark
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(11, 15, 25, 0) 70%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(248, 250, 252, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: { xs: '250px', md: '450px' },
          height: { xs: '250px', md: '450px' },
          background: isDark
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(11, 15, 25, 0) 70%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
            gap: { xs: 5, sm: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Avatar for Mobile (< md screens) */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  p: 0.6,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                  boxShadow: isDark
                    ? '0 0 35px rgba(16, 185, 129, 0.4), 0 0 70px rgba(6, 182, 212, 0.2)'
                    : '0 10px 30px rgba(16, 185, 129, 0.25)',
                }}
              >
                <Avatar
                  src="/MyImage.jpg"
                  alt="Muhammed Walied"
                  sx={{
                    width: { xs: 210, sm: 260 },
                    height: { xs: 210, sm: 260 },
                    border: '4px solid',
                    borderColor: 'background.default',
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* Left / Main Text Content */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {/* Status & Focus Pill Badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.75,
                    borderRadius: '30px',
                    backgroundColor: isDark
                      ? 'rgba(16, 185, 129, 0.1)'
                      : 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid',
                    borderColor: isDark
                      ? 'rgba(16, 185, 129, 0.25)'
                      : 'rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <Box
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      boxShadow: '0 0 10px #10B981',
                    }}
                  />
                  <CustomTypography
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Available for new projects
                  </CustomTypography>
                </Box>

                <Chip
                  icon={<TbBrandReactNative size={16} style={{ color: '#06B6D4' }} />}
                  label="Primary: Mobile App Development"
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    borderRadius: '20px',
                    py: 0.5,
                    backgroundColor: isDark ? 'rgba(6, 182, 212, 0.12)' : 'rgba(6, 182, 212, 0.08)',
                    color: '#06B6D4',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(6, 182, 212, 0.25)' : 'rgba(6, 182, 212, 0.2)',
                  }}
                />
              </Box>
            </motion.div>

            {/* Main Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <CustomTypography
                component="h1"
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.4rem', lg: '3.8rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: 'text.primary',
                  mb: 1.5,
                }}
              >
                Hi, I'm <AnimationText text="Muhammed" /> 👋
              </CustomTypography>
            </motion.div>

            {/* Subtitle / Role */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CustomTypography
                sx={{
                  fontSize: { xs: '1.05rem', sm: '1.25rem', md: '1.35rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1.5,
                  display: 'inline-block',
                }}
              >
                Mobile Application Developer • React Native Specialist
              </CustomTypography>
            </motion.div>

            {/* Currently Learning / Backend Focus Pill */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: '12px',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                  mb: 2.5,
                }}
              >
                <CustomTypography sx={{ fontSize: '0.825rem', color: 'text.secondary', fontWeight: 500 }}>
                  ⚡ Currently expanding into Backend with:
                </CustomTypography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip
                    icon={<FaJava size={14} style={{ color: '#E76F00' }} />}
                    label="Java"
                    size="small"
                    sx={{
                      height: '24px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      backgroundColor: isDark ? 'rgba(231, 111, 0, 0.12)' : 'rgba(231, 111, 0, 0.08)',
                      color: '#E76F00',
                    }}
                  />
                  <Chip
                    icon={<SiSpringboot size={14} style={{ color: '#6DB33F' }} />}
                    label="Spring Boot"
                    size="small"
                    sx={{
                      height: '24px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      backgroundColor: isDark ? 'rgba(109, 179, 63, 0.12)' : 'rgba(109, 179, 63, 0.08)',
                      color: '#6DB33F',
                    }}
                  />
                </Box>
              </Box>
            </motion.div>

            {/* Bio Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CustomTypography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.7,
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: '580px' },
                  mx: { xs: 'auto', md: '0' },
                  mb: 3.5,
                }}
              >
                I'm a Mobile Application Developer specializing in crafting high-performance, seamless cross-platform mobile experiences with React Native & Android. While mobile development is my core passion and specialty, I also build web applications and I am currently actively learning backend development using Java and Spring Boot to engineer robust full-stack solutions.
              </CustomTypography>
            </motion.div>

            {/* Location & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 3,
                  color: 'text.secondary',
                  mb: 4,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <MdOutlineLocationOn style={{ color: '#10B981', fontSize: '1.25rem' }} />
                  <CustomTypography sx={{ fontSize: '0.925rem', fontWeight: 500 }}>
                    Cairo, Egypt
                  </CustomTypography>
                </Box>
              </Box>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 2,
                  mb: 4,
                }}
              >
                <AnchorLink offset={80} style={{ textDecoration: 'none' }} href="#Contact">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      px: 3.5,
                      py: 1.3,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      boxShadow: '0 4px 18px 0 rgba(16, 185, 129, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                        boxShadow: '0 6px 24px 0 rgba(16, 185, 129, 0.55)',
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </AnchorLink>

                <AnchorLink offset={80} style={{ textDecoration: 'none' }} href="#Projects">
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 3,
                      py: 1.3,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                      color: 'text.primary',
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: isDark
                          ? 'rgba(16, 185, 129, 0.08)'
                          : 'rgba(16, 185, 129, 0.05)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    View Projects
                  </Button>
                </AnchorLink>

                {/* Mobile-only CV Download Button */}
                <Button
                  component="a"
                  href="/MuhammedMahrousResume.pdf"
                  target="_blank"
                  download
                  variant="outlined"
                  size="large"
                  startIcon={<LuDownload />}
                  sx={{
                    display: { xs: 'inline-flex', sm: 'none' },
                    px: 3,
                    py: 1.3,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '12px',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                  }}
                >
                  CV
                </Button>
              </Box>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                }}
              >
                <Tooltip title="GitHub Profile">
                  <IconButton
                    component="a"
                    href="https://github.com/Muhammed-Walied"
                    target="_blank"
                    sx={{
                      color: 'text.primary',
                      backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.04)',
                      border: '1px solid',
                      borderColor: isDark
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: '#10B981',
                        backgroundColor: isDark
                          ? 'rgba(16, 185, 129, 0.15)'
                          : 'rgba(16, 185, 129, 0.1)',
                        borderColor: '#10B981',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <FaGithub size={20} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="LinkedIn Profile">
                  <IconButton
                    component="a"
                    href="https://linkedin.com/in/muhammed-walied-281213277"
                    target="_blank"
                    sx={{
                      color: 'text.primary',
                      backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.04)',
                      border: '1px solid',
                      borderColor: isDark
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: '#06B6D4',
                        backgroundColor: isDark
                          ? 'rgba(6, 182, 212, 0.15)'
                          : 'rgba(6, 182, 212, 0.1)',
                        borderColor: '#06B6D4',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <FaLinkedin size={20} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Send Email">
                  <IconButton
                    component="a"
                    href="mailto:muhammedmahrous48@gmail.com"
                    sx={{
                      color: 'text.primary',
                      backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.04)',
                      border: '1px solid',
                      borderColor: isDark
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: '#10B981',
                        backgroundColor: isDark
                          ? 'rgba(16, 185, 129, 0.15)'
                          : 'rgba(16, 185, 129, 0.1)',
                        borderColor: '#10B981',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <FaEnvelope size={18} />
                  </IconButton>
                </Tooltip>
              </Box>
            </motion.div>
          </Box>

          {/* Desktop Avatar (>= md screens) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  p: 0.75,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                  boxShadow: isDark
                    ? '0 0 45px rgba(16, 185, 129, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)'
                    : '0 15px 45px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.02) rotate(1deg)',
                    boxShadow: isDark
                      ? '0 0 60px rgba(16, 185, 129, 0.6), 0 0 110px rgba(6, 182, 212, 0.3)'
                      : '0 20px 55px rgba(16, 185, 129, 0.4)',
                  },
                }}
              >
                <Avatar
                  src="/MyImage.jpg"
                  alt="Muhammed Walied"
                  sx={{
                    width: { md: 320, lg: 370 },
                    height: { md: 320, lg: 370 },
                    border: '5px solid',
                    borderColor: 'background.default',
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
