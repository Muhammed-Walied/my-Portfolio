import Box from '@mui/material/Box';
import CustomTypography from '../typography/CustomTypography';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { useTheme } from '@mui/material';

type Props = { icons: JSX.Element; title: string };

export default function SkillsCard(props: Props) {
  const getFontStyle = useResponsiveFont();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: 2,
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: `
          -5px -5px 10px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#ffffff'},
          5px 5px 10px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}
        `,
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: `
            -2px -2px 5px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#ffffff'},
            2px 2px 5px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}
          `,
        },
      }}
    >
      {props.icons}
      <CustomTypography
        sx={{
          ...getFontStyle('Body1'),
          marginTop: '2px',
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        {props.title}
      </CustomTypography>
    </Box>
  );
}
