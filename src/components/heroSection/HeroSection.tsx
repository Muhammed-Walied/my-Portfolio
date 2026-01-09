import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { MdOutlineLocationOn } from 'react-icons/md';
import { useResponsiveStack } from '../../responsive';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import dotAnimation from '../../assets/dotAnimation.json';
import Lottie from 'lottie-react';
import { AnimationText } from '../animation/AnimationText';
import { motion } from 'framer-motion';


export const HeroSection = () => {
  const { isSmallDown } = useResponsiveStack();
  const getFontStyle = useResponsiveFont();
  return (
    <Box
      id="Home"
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        p: 5,
        scrollSnapAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
        }}
      >
        {isSmallDown && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                variant="square"
                sx={{
                  width: { xs: 250, md: 400 },
                  height: { xs: 250, md: 400 },
                  boxShadow: ' 0px 0px 20px 0px #00e676',
                  borderRadius: '50%',
                }}
                src="/MyImage.jpg"
              />
            </Box>
          </motion.div>
        )}
        <Box sx={{ flex: 1, mt: isSmallDown ? 4 : 0 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CustomTypography
              sx={{
                ...getFontStyle('H1'),
                color: 'text.primary',
              }}
            >
              <AnimationText text="Hi, I'm Muhammed 👋" />
            </CustomTypography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CustomTypography
              sx={{
                ...getFontStyle('Body2'),
                color: 'text.secondary',
              }}
            >
              I'm a frontend developer (React.js & React Native) with a focus on creating exceptional digital experiences
              that are fast, accessible, visually appealing, and responsive. Even though I have been creating web and
              mobile applications for over 2 years, I still love it as if it was something new.
            </CustomTypography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box sx={{ mt: 5, color: 'text.secondary' }}>
              <CustomTypography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...getFontStyle('Body2'),
                  marginLeft: 1,
                }}
              >
                <MdOutlineLocationOn style={{ marginRight: '10px' }} size={20} /> Cairo, Egypt
              </CustomTypography>
              <CustomTypography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...getFontStyle('Body2'),
                }}
              >
                <Lottie style={{ height: 40 }} animationData={dotAnimation} />
                Available for new projects
              </CustomTypography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Box sx={{ mt: 2 }}>
              <Tooltip placement="bottom" title="GitHub">
                <IconButton sx={{ color: 'text.secondary' }} target="_blank" href="https://github.com/Muhammed-Walied">
                  <FaGithub />
                </IconButton>
              </Tooltip>

              <Tooltip placement="bottom" title="LinkedIn">
                <IconButton
                  sx={{ color: 'text.secondary' }}
                  target="_blank"
                  href="https://linkedin.com/in/muhammed-walied-281213277"
                >
                  <FaLinkedin />
                </IconButton>
              </Tooltip>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button variant="contained" color="primary" sx={{ mt: 4 }}>
              Contact Me
            </Button>
          </motion.div>
        </Box>
        {!isSmallDown && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                variant="square"
                sx={{
                  width: { xs: 250, md: 400 },
                  height: { xs: 250, md: 400 },
                  boxShadow: ' 0px 0px 20px 0px #00e676',
                  borderRadius: '50%',
                }}
                src="/MyImage.jpg"
              />
            </Box>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};
