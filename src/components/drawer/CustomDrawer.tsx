import   Typography  from '@mui/material/Typography';
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import Drawer from '@mui/material/Drawer';
import  Box from "@mui/material/Box"

const drawerWidth = 240;

type Props = {
container?: (() => HTMLElement) | undefined
handelDrawerToggle: () => void;
mobileOpen: boolean;
navItems: string[];
}

export const  CustomDrawer=({ container, handelDrawerToggle, mobileOpen, navItems }: Props)=> {
  return (
    <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handelDrawerToggle}
          
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handelDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
        </Drawer>
      </nav>
  )
}