import { Box } from '@mui/material';
import CustomTypography from './typography/CustomTypography';
import { useResponsiveFont } from '../responsive/useResponsiveFont';
import { useResponsiveStack } from '../responsive';

interface IProps {
  header: string;
  subtitle: string;
}
// eslint-disable-next-line no-empty-pattern
const SectionsHeader = ({ header, subtitle }: IProps) => {
  const getFontStyle = useResponsiveFont();
  const { isMediumDown } = useResponsiveStack();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          width: 'auto',
          height: '35px',
          backgroundColor: 'grey.200',
          color: 'grey.600',
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': { backgroundColor: 'grey.200' },
          p:2
        }}
      >
        <CustomTypography
          sx={{
            ...getFontStyle('Body3'),
            textTransform: 'capitalize',
            color: 'grey.600',
          }}
        >
          {header}
        </CustomTypography>
      </Box>
      <CustomTypography
        sx={{
          ...getFontStyle('Subtitle'),
          marginTop: 1,
          color: 'grey.600',
          textAlign: isMediumDown ? 'center' : 'inherit',
        }}
      >
        {subtitle}
      </CustomTypography>
    </Box>
  );
};

export default SectionsHeader;
