import { Typography, TypographyPropsVariantOverrides, SxProps, Theme } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { OverridableStringUnion } from '@mui/types';
import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
  sx?: SxProps<Theme>;
  component?: any;
};

export default function CustomTypography({ children, variant, sx = {}, component }: Props) {
  return (
    <Typography variant={variant} sx={sx} component={component || 'div'}>
      {children}
    </Typography>
  );
}
