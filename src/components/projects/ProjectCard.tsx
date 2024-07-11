import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { styled, useTheme } from '@mui/material/styles';
import CustomTypography from '../typography/CustomTypography';
import { Button, CardActions } from '@mui/material';
import { FaGithub, FaLink } from 'react-icons/fa';

// Styling for the hover overlay
const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(82, 84, 86, 0.7)' : 'rgba(22, 25, 32, 0.7)',
  color: '#FFFFFF',
  zindex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.5s ease',
  '&:hover': {
    opacity: 1,
  },
}));
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
  const theme = useTheme();
  return (
    <Card
      sx={{
        position: 'relative',
        minWidth: 200,
        maxWidth: 320,
        p: 1,
        height: 'auto',
        borderRadius: 5,
        mx: 'auto',
        boxShadow: 'none',
        transition: 'all 0.5s ease',
        overflow: 'hidden', // Ensures the overlay doesn't extend outside the card
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt="Project image"
        sx={{
          width: '99%',
          mx: 'auto',
          height: '120px',
          borderRadius: 5,
        }}
      />
      <Box sx={{ p: 1 }}>
        <CustomTypography
          sx={{
            ...getFontStyle('Body2'),
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
      {livePreview ||
        (githubLink && (
          <Overlay>
            <CardActions sx={{ justifyContent: 'space-evenly' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: '25px',
                    '&:hover': { backgroundColor: 'background.paper' },
                  }}
                  target="_blank"
                  href={githubLink}
                  aria-label=""
                >
                  <FaGithub style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} size={20} />
                  <CustomTypography
                    sx={{
                      color: 'grey.900',
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontWeight: '300',
                      marginLeft: 1,
                      width: '100%',
                    }}
                  >
                    github
                  </CustomTypography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: '25px',
                    '&:hover': { backgroundColor: 'background.paper' },
                  }}
                  target="_blank"
                  href={livePreview}
                  aria-label=""
                >
                  <FaLink style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} size={20} />
                  <CustomTypography
                    sx={{
                      color: 'grey.900',
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontWeight: '300',
                      marginLeft: 1,
                      width: '100%',
                    }}
                  >
                    demo
                  </CustomTypography>
                </Button>
            </CardActions>
          </Overlay>
        ))}
    </Card>
  );
};
