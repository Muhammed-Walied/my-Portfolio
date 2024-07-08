import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import CustomTypography from "../typography/CustomTypography";
import { Grid } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "./ProjectsData";
import { useResponsiveFont } from "../../responsive/useResponsiveFont";
import { useResponsiveStack } from "../../responsive";

type Props = {};

export const Projects = ({}: Props) => {
  const getFontStyle = useResponsiveFont();
  const { isSmallDown, isMediumDown } = useResponsiveStack();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "95px",
            height: "35px",
            backgroundColor: grey[300],
            color: grey[600],
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { backgroundColor: grey[300] },
          }}
        >
          <CustomTypography
            sx={{
              ...getFontStyle("Body3"),
              fontWeight: "500",
              textTransform: "capitalize",
              color: grey[600],
            }}
          >
            Projects
          </CustomTypography>
        </Box>
        <CustomTypography
          sx={{
            ...getFontStyle("Subtitle"),
            fontWeight: "400",
            marginTop: 1,
            color: grey[600],
            textAlign: isMediumDown ? "center" : "inherit",
          }}
        >
          Things I’ve built so far
        </CustomTypography>
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", mt: 5 }}>
        <Grid container spacing={3}>
          {projectsData.map((item) => (
            <Grid item xs={12} sm={6} md={3}>
              <ProjectCard
                image={item.image}
                title={item.title}
                description={item.description}
                tech={item.tech}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
