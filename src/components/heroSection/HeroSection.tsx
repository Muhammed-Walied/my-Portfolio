import { Avatar, IconButton, Tooltip } from '@mui/material';
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
type Props = {};

export const HeroSection = ({}: Props) => {
  const { isSmallDown } = useResponsiveStack();
  const getFontStyle = useResponsiveFont();
  return (
    <Box
    id="Home"
     sx={{ width: '100%',
    backgroundColor: 'background.default',
    p: 5,
    scrollSnapAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    display:"flex"
    }}>
      
 
    <Box
     
      sx={{
        display: 'flex',
        flexDirection: isSmallDown ? 'column-reverse' : 'row',
        justifyContent: isSmallDown ? 'center' : 'space-between',
        alignItems: isSmallDown ? 'center' : 'flex-start',
       
      }}
    >
      <Box sx={{ flex: 1, mt: isSmallDown ? 4 : 0 }}>
        <CustomTypography
          sx={{
            ...getFontStyle('H1'),
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'grey.900',
          }}
        >
          <AnimationText text=' Hi, I’m Muhammed 👋'/>
         
          
        </CustomTypography>
        <CustomTypography
          sx={{
            width: isSmallDown ? '100%' : '80%',
            ...getFontStyle('Body2'),
            color: 'grey.600',
          }}
        >
          I'm a frontend developer (React.js & React Native) with a focus on creating exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even though I have been creating web and mobile
          applications for over 2 years, I still love it as if it was something new.
        </CustomTypography>
        <Box sx={{ mt: 5, color: 'grey.600' }}>
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

        <Tooltip placement="bottom" title="GitHub">
          <IconButton sx={{ color: 'grey.600' }} target="_blank" href="https://github.com/Muhammed-Walied">
            <FaGithub />
          </IconButton>
        </Tooltip>

        <Tooltip placement="bottom" title="LinkedIn">
          <IconButton
            sx={{ color: 'grey.600' }}
            target="_blank"
            href="https://linkedin.com/in/muhammed-walied-281213277"
          >
            <FaLinkedin />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '360px' },
          width: { xs: '280px', md: '320px' },
        }}
      >
        <Avatar
          variant="square"
          sx={{ width: 250, height: 250, boxShadow: ' 0px 0px 10px 0px #000', borderRadius: '50%' }}
          src="/MyImage.jpg"
        />
      </Box>
    </Box>
    </Box>
  );
};
