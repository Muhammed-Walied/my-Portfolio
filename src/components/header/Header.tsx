import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CustomDrawer } from "../drawer/CustomDrawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import { grey } from "@mui/material/colors";
interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}
const navItems = ["Home", "Work", "About", "Contact"];

export const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent" }}
        elevation={0}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            disableRipple
          >
            <MenuIcon sx={{ color: grey[600] }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: grey[900],
            }}
          >
            {"<Wello />"}
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button disableRipple key={item} sx={{ color: grey[600] }}>
                {item}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            disableRipple
            sx={{ display: { xl: "none" }, mx: "25px" }}
          >
            <LightModeIcon sx={{ color: grey[600] }} />
          </IconButton>
          <Button
            sx={{
              color: grey[50],
              bgcolor: grey[900],
              borderRadius: "20px",
              "&:hover": { bgcolor: grey[900] },
            }}
            disableRipple
            variant="contained"
          >
            CV
          </Button>
        </Toolbar>
      </AppBar>
      <CustomDrawer
        handelDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        mobileOpen={mobileOpen}
        container={container}
      />
    </Box>
  );
};
