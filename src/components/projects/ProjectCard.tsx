import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { CardActions, CardMedia, Chip, Button, Tooltip, useTheme } from '@mui/material';
import { FaGithub } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';

type Props = {
  image: string;
  title: string;
  description: string;
  tech: string;
  livePreview: string;
  githubLink: string;
};

export const ProjectCard = ({ image, title, description, tech, livePreview, githubLink }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const techList = tech.split(',').map((t) => t.trim()).filter(Boolean);
  const hasLivePreview = Boolean(livePreview && livePreview.trim() !== '');
  const hasGithub = Boolean(githubLink && githubLink.trim() !== '');

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: isDark ? 'rgba(30, 41, 59, 0.45)' : 'rgba(255, 255, 255, 0.95)',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
        boxShadow: isDark
          ? '0 4px 20px 0 rgba(0, 0, 0, 0.3)'
          : '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: 'rgba(16, 185, 129, 0.45)',
          boxShadow: isDark
            ? '0 16px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.2)'
            : '0 16px 30px -10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(16, 185, 129, 0.15)',
          '& .project-img': {
            transform: 'scale(1.04)',
          },
        },
      }}
    >
      {/* Image Container with Consistent Aspect Ratio */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '230px', sm: '260px', md: '285px' },
          width: '100%',
          overflow: 'hidden',
          backgroundColor: isDark ? '#0F172A' : '#E2E8F0',
        }}
      >
        <CardMedia
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          className="project-img"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transition: 'transform 0.4s ease',
          }}
        />

        {/* Live Badge in top right corner if active */}
        {hasLivePreview && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 0.7,
              px: 1.4,
              py: 0.4,
              borderRadius: '20px',
              backgroundColor: 'rgba(16, 185, 129, 0.95)',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 700,
              boxShadow: '0 2px 10px rgba(16, 185, 129, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
              }}
            />
            Live Demo
          </Box>
        )}
      </Box>

      {/* Card Content Body */}
      <Box
        sx={{
          p: { xs: 2.5, sm: 3 },
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {/* Project Title */}
          <CustomTypography
            component="h3"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: '1.15rem', sm: '1.25rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 1,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            {title}
          </CustomTypography>

          {/* Project Description (Consistent 3 lines max for perfect symmetry) */}
          <CustomTypography
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              lineHeight: 1.6,
              minHeight: { sm: '68px' },
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 2,
            }}
          >
            {description}
          </CustomTypography>

          {/* Tech Stack Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, minHeight: '30px', mb: 2.5 }}>
            {techList.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  height: '24px',
                  borderRadius: '6px',
                  backgroundColor: isDark
                    ? 'rgba(16, 185, 129, 0.1)'
                    : 'rgba(16, 185, 129, 0.08)',
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: isDark
                    ? 'rgba(16, 185, 129, 0.25)'
                    : 'rgba(16, 185, 129, 0.2)',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Action Buttons Footer - Always Symmetrical & Balanced */}
        <CardActions
          sx={{
            p: 0,
            pt: 2,
            mt: 'auto',
            borderTop: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1.5,
            width: '100%',
          }}
        >
          {/* GitHub Code Button */}
          {hasGithub ? (
            <Button
              component="a"
              href={githubLink}
              target="_blank"
              size="small"
              fullWidth
              startIcon={<FaGithub />}
              variant="outlined"
              sx={{
                borderRadius: '10px',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                color: 'text.primary',
                fontSize: '0.825rem',
                fontWeight: 600,
                py: 0.8,
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  backgroundColor: isDark
                    ? 'rgba(16, 185, 129, 0.08)'
                    : 'rgba(16, 185, 129, 0.05)',
                },
              }}
            >
              GitHub Code
            </Button>
          ) : (
            <Tooltip title="Source code is private or internal project">
              <span style={{ width: '100%' }}>
                <Button
                  disabled
                  fullWidth
                  size="small"
                  startIcon={<FaGithub />}
                  variant="outlined"
                  sx={{
                    borderRadius: '10px',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    py: 0.8,
                    opacity: 0.5,
                  }}
                >
                  Code (Private)
                </Button>
              </span>
            </Tooltip>
          )}

          {/* Live Preview Button */}
          {hasLivePreview ? (
            <Button
              component="a"
              href={livePreview}
              target="_blank"
              size="small"
              fullWidth
              startIcon={<LuExternalLink />}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '10px',
                fontSize: '0.825rem',
                fontWeight: 600,
                py: 0.8,
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                boxShadow: '0 3px 12px rgba(16, 185, 129, 0.35)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  boxShadow: '0 5px 18px rgba(16, 185, 129, 0.5)',
                },
              }}
            >
              Live Demo
            </Button>
          ) : (
            <Tooltip title="Live deployment or APK demo available upon request">
              <span style={{ width: '100%' }}>
                <Button
                  disabled
                  fullWidth
                  size="small"
                  startIcon={<LuExternalLink />}
                  variant="outlined"
                  sx={{
                    borderRadius: '10px',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    py: 0.8,
                    opacity: 0.5,
                    borderStyle: 'dashed',
                  }}
                >
                  Live Preview
                </Button>
              </span>
            </Tooltip>
          )}
        </CardActions>
      </Box>
    </Card>
  );
};
