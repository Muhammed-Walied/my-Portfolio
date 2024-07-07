import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import CustomTypography from "../typography/CustomTypography";
import { green, grey } from "@mui/material/colors";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

type Props = {};

export const HeroSection = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
     
      }}
    >
      <Box sx={{ flex: 1 }}>
        <CustomTypography
          sx={{ fontSize: "60px", lineHeight: "72px", letterSpacing: "-2%" }}
        >
          Hi, I’m Muhammed 👋
        </CustomTypography>
        <CustomTypography
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0%",
            width: "80%",
          }}
        >
          I'm a frontend developer (React.js & React Native) with a focus on
          creating  exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web and mobile applications for over 2 years, I still
          love it as if it was something new.
        </CustomTypography>
        <Box sx={{ mt: 5 }}>
          <CustomTypography sx={{ display: "flex", alignItems: "center" }}>
            <MdOutlineLocationOn
              style={{ marginRight: "10px" }}
              size={20}
              color={grey[600]}
            />{" "}
            Cairo, Egypt
          </CustomTypography>
          <CustomTypography
            sx={{ display: "flex", alignItems: "center", marginLeft: "5px" }}
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
