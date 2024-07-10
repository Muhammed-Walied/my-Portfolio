import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import CardActions from '@mui/material/CardActions';
import { grey } from '@mui/material/colors';
import { FaGithub, FaLink } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';

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
    <Box
      sx={{
        bgcolor: 'background.default',
        minWidth: 200,
        maxWidth: 320,
        height: 'auto',
        borderRadius: 10,
        mx: 'auto',
        boxShadow: 'none',
        transition: 'all 0.5s ease',
        '&:hover': {
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          transform: 'scale(1.05)',
          rotate: `3deg`,
        },
      }}
    >
      <Card>
        <CardMedia
          component="img"
          src={image}
          alt="ProjectImage"
          sx={{
            width: '100%',
            height: '120px',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Box sx={{ p: 1 }}>
          <CustomTypography
            sx={{
              ...getFontStyle('Subtitle'),
              fontWeight: '500',
              textTransform: 'capitalize',
              color: 'grey.900',
            }}
          >
            {title}
          </CustomTypography>
          <CustomTypography
            sx={{
              ...getFontStyle('Body3'),
              fontWeight: '400',
              color: grey[600],
            }}
          >
            {description}
          </CustomTypography>
          <CustomTypography
            sx={{
              fontSize: '12px',
              lineHeight: '20px',
              fontWeight: '600',
              color: 'grey.900',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 1,
            }}
          >
            Tech stack :{' '}
            <CustomTypography
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '300',
                color: grey[600],
              }}
            >
              {tech}
            </CustomTypography>
          </CustomTypography>
        </Box>
        <CardActions sx={{ justifyContent: 'space-evenly' }}>
          <Tooltip placement="top" title="GitHub">
            <IconButton target="_blank" href={githubLink} disabled={githubLink === ''} aria-label="">
              <FaGithub color={githubLink === '' ? 'grey.400' : 'grey.900'} size={20} />
              <CustomTypography
                sx={{
                  textDecoration: 'underline',
                  color: githubLink === '' ? 'grey.400' : 'grey.900',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '300',
                  marginLeft: 1,
                }}
              >
                View Code
              </CustomTypography>
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title="Link">
            <IconButton target="_blank" href={livePreview} disabled={livePreview === ''} aria-label="">
              <FaLink color={livePreview === '' ? 'grey.400' : 'grey.900'} size={20} />
              <CustomTypography
                sx={{
                  textDecoration: 'underline',
                  color: livePreview === '' ? 'grey.400' : 'grey.900',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '300',
                  marginLeft: 1,
                }}
              >
                Live Preview
              </CustomTypography>
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
};
