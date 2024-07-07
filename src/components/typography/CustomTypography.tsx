import { Typography, TypographyPropsVariantOverrides } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { OverridableStringUnion } from '@mui/types';
import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
  sx?:React.CSSProperties
}

export default function CustomTypography({children,variant,sx={}}: Props) {
  return (
    <Typography variant={variant} sx={sx}>
     {children}
    </Typography>
  )
}