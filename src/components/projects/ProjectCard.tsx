import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import CustomTypography from '../typography/CustomTypography';
import { CardActions, IconButton, Tooltip, CardMedia } from '@mui/material';
import { FaGithub, FaLink } from 'react-icons/fa';

type Props = {
  image: string;
  title: string;
  description: string;
  tech: string;
  livePreview: string;
  githubLink: string;
};

export const ProjectCard = ({ image, title, description, tech, livePreview, githubLink }: Props) => {
  const getFontStyle = useResponsiveFont();

  return (
    <Card
      sx={{
        position: 'relative',
        height: '350px',
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'primary.main',
        boxShadow: '0px 0px 10px 0px #00e676',
        '&:hover .overlay': {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt="Project image"
        sx={{
          height: '100%',
          objectFit: 'contain',
          
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          transition: 'clip-path 0.4s ease-in-out',
        }}
      >
        <CustomTypography
          sx={{
            ...getFontStyle('Body2'),
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {title}
        </CustomTypography>
        <CustomTypography
          sx={{
            ...getFontStyle('Body2'),
            color: 'white',
            textAlign: 'center',
            marginTop: 1,
          }}
        >
          {description}
        </CustomTypography>
        <CustomTypography
          sx={{
            ...getFontStyle('Body2'),
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          Tech stack:{' '}
          <CustomTypography
            sx={{
              ...getFontStyle('Body2'),
              color: 'white',
            }}
          >
            {tech}
          </CustomTypography>
        </CustomTypography>
        <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
          <Tooltip title="Github">
            <IconButton href={githubLink} target="_blank">
              <FaGithub color='#00e676' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Live Preview">
            <IconButton href={livePreview} target="_blank">
              <FaLink color='#00e676' />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
};
