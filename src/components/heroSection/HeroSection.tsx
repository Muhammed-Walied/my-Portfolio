import { Avatar, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import CustomTypography from "../typography/CustomTypography";
import { green, grey } from "@mui/material/colors";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useResponsiveStack } from "../../responsive";
import { useResponsiveFont } from "../../responsive/useResponsiveFont";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

type Props = {};

export const HeroSection = ({}: Props) => {
  const { isSmallDown } = useResponsiveStack();
  const getFontStyle = useResponsiveFont();
  return (
    <Box
      id="Home"
      sx={{
        display: "flex",
        flexDirection: isSmallDown ? "column-reverse" : "row",
        justifyContent: isSmallDown ? "center" : "space-between",
        alignItems: isSmallDown ? "center" : "flex-start",
        width: "100%",
        flex: 1,
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
            width: isSmallDown?"100%":"80%",
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

        <Tooltip placement="bottom" title="GitHub">
          <IconButton  target="_blank" href="https://github.com/Muhammed-Walied">
            <FaGithub />
          </IconButton>
        </Tooltip>

        <Tooltip placement="bottom" title="LinkedIn">
          <IconButton target="_blank" href="https://linkedin.com/in/muhammed-walied-281213277">
            <FaLinkedin />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "300px", md: "360px" },
          width: { xs: "280px", md: "320px" },
        }}
      >
        <Avatar
          variant="square"
          sx={{
            position: "absolute",
            zIndex: 10,
            height: { xs: "280px", md: "320px" },
            width: { xs: "240px", md: "280px" },
            border: 8,

            left: { xs: "5px", md: "0" },
            top: { md: "0" },
            objectFit: "cover",
          }}
          src="/MyImage.jpg"
        />
        <Box
          sx={{
            position: "absolute",
            height: { xs: "280px", md: "320px" },
            width: "280px",
            border: 8,
            borderColor: "transparent",
            backgroundColor: grey[200],
            top: { md: 5 },
            bottom: { xs: "auto", md: 0 },
            right: { xs: "auto", md: 0 },
          }}
        ></Box>
      </Box>
    </Box>
  );
};
