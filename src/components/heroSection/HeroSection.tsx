import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import CustomTypography from "../typography/CustomTypography";
import { green, grey } from "@mui/material/colors";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useResponsiveStack } from "../../responsive";
import { useResponsiveFont } from "../../responsive/useResponsiveFont";

type Props = {};

export const HeroSection = ({}: Props) => {
  const { isSmallDown } = useResponsiveStack();
  const getFontStyle = useResponsiveFont();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallDown ? "column-reverse" : "row",
        justifyContent: isSmallDown ? "center" : "space-between",
        alignItems: isSmallDown ? "center" : "flex-start",
        width: "100%",
      }}
    >
      <Box sx={{ flex: 1, mt: isSmallDown ? 4 : 0 }}>
        <CustomTypography
          sx={{
            ...getFontStyle("H1"),
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Hi, I’m Muhammed 👋
        </CustomTypography>
        <CustomTypography
          sx={{
            width: "80%",
            ...getFontStyle("Body2"),
          }}
        >
          I'm a frontend developer (React.js & React Native) with a focus on
          creating exceptional digital experiences that are fast, accessible,
          visually appealing, and responsive. Even though I have been creating
          web and mobile applications for over 2 years, I still love it as if it
          was something new.
        </CustomTypography>
        <Box sx={{ mt: 5 }}>
          <CustomTypography
            sx={{
              display: "flex",
              alignItems: "center",
              ...getFontStyle("Body2"),
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <MdOutlineLocationOn
              style={{ marginRight: "10px" }}
              size={20}
              color={grey[600]}
            />{" "}
            Cairo, Egypt
          </CustomTypography>
          <CustomTypography
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "5px",
              ...getFontStyle("Body2"),
            }}
          >
            <GrStatusGoodSmall
              style={{ marginRight: "10px" }}
              color={green[700]}
              size={10}
            />{" "}
            Available for new projects
          </CustomTypography>
        </Box>
      </Box>
      <Box>
        <Avatar
          variant="square"
          sx={{ width: 250, height: 250, boxShadow: " 0px 0px 10px 0px #000" }}
          src="/MyImage.jpg"
        />
      </Box>
    </Box>
  );
};
