import  Box  from '@mui/material/Box'
import { blue, grey } from '@mui/material/colors'
import React from 'react'
import { SiTypescript } from 'react-icons/si'
import CustomTypography from '../typography/CustomTypography'

type Props = {icons:JSX.Element,title:string} 

export default function SkillsCard(props: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column",  mx:"auto" }}>
    {props.icons}
    <CustomTypography
      sx={{ fontSize: "18px", lineHeight: "28px", fontWeight: "400" ,marginTop:"2px",textAlign:"center" , color:grey[600]}}
    >
      {props.title}
    </CustomTypography>
  </Box>  )
}