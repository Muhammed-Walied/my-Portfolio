import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import CustomTypography from "../typography/CustomTypography";
import { useResponsiveFont } from "../../responsive/useResponsiveFont";

type Props = { icons: JSX.Element; title: string };

export default function SkillsCard(props: Props) {
  const getFontStyle = useResponsiveFont();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mx: "auto" }}>
      {props.icons}
      <CustomTypography
        sx={{
          ...getFontStyle("Body1"),
          marginTop: "2px",
          textAlign: "center",
          color: grey[600],
        }}
      >
        {props.title}
      </CustomTypography>
    </Box>
  );
}
