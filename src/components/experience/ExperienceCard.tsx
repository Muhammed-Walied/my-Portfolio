import Box from "@mui/material/Box";
import CustomTypography from "../typography/CustomTypography";
import { green, grey } from "@mui/material/colors";
import { useResponsiveFont } from "../../responsive/useResponsiveFont";
import { useResponsiveStack } from "../../responsive";

type Props = {};

export const ExperienceCard = ({}: Props) => {
  const getFontStyle = useResponsiveFont();
  const { isSmallDown } = useResponsiveStack();

  return (
    <Box
      sx={{
        width: isSmallDown ? "100%" : "85%",
        mx: "auto",
        mt: 5,
        backgroundColor: "#feefef",
        borderRadius: "15px",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallDown ? "column" : "row",
          justifyContent: "space-between",
        }}
      >
        <CustomTypography
          sx={{
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: "500",
            color: green[600],
          }}
        >
          freelance
        </CustomTypography>
        <CustomTypography
          sx={{
            ...getFontStyle("Subtitle"),
            fontWeight: "600",
            color: grey[900],
          }}
        >
          IN-Hand
        </CustomTypography>

        <CustomTypography
          sx={{
            ...getFontStyle("Body2"),
            fontWeight: "400",
            color: grey[600],
          }}
        >
          Aug 2023 - Feb 2024
        </CustomTypography>
      </Box>
      <CustomTypography
        sx={{
          ...getFontStyle("Body2"),
          fontWeight: "400",
          color: grey[700],

          width: isSmallDown ? "90%" : "50%",
          marginTop: 1,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        • Developed customizable mobile application for multivendor shopping
        using React Native, resulting in 20% increase in customer engagement.
        <br />
        • Implemented delivery feature that reduced product delivery times by
        30%, significantly enhancing customer experience.
        <br />
        • Created seller feature enabling individuals to list and sell wide
        range of products, leading to 15% growth in seller registrations.
        <br />
        Integrated notifications feature to keep users informed of important
        updates and order statuses, improving user retention by 25%.
        <br />• Incorporated animations to enhance overall user interface and
        create more engaging user experience.
      </CustomTypography>
    </Box>
  );
};
