// Material UI
import { darkTheme, originalDrawerTheme } from "../app/theme";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";

// Material UI items and icons
import {
  Build,
  ExpandLess,
  ExpandMore,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";

// general
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout, reset } from "../features/auth/authSlice"
import { useAppDispatch } from "../app/hooks";
import { Modal } from "@mui/material";

interface ILoginProps {}

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// the main render function
const Navbar: React.FC<ILoginProps> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const userLogout = () => {
    dispatch(logout());
    dispatch(reset());
    setTimeout(()=>
     { navigate("/")},
     1000
    )
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // show navbar when not on login screen
  const location = useLocation();

  const pathMatchRoute = (route: any) => {
    if (route === location.pathname) return true;
  };

  // open and close collabsible accordeon
  const [openAcc, setOpenAcc] = useState(true);

  const handleAccClick = () => {
    setOpenAcc(!openAcc);
  };

  return (
    <>
      {pathMatchRoute("/") ? null : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <AppBar position="fixed" open={open}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  McLaren Personal Portal
                </Typography>
                {/* right side below */}
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    edge="end"
                    onClick={userLogout}
                    color="inherit"
                  >
                    <PowerSettingsNewRoundedIcon />
                  </IconButton>
                </Box>
                {/* right side above */}
              </Toolbar>
            </AppBar>
          </ThemeProvider>

          <ThemeProvider theme={originalDrawerTheme}>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              anchor="left"
              open={open}
              onClose={handleDrawerClose}
              variant="temporary"
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon color="primary" />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
{/* error somewhere below */}
              <List onClick={handleDrawerClose}>
                <ListItem component={Link} to="/mycars" button key={1}>
                  <ListItemIcon>
                    <DirectionsCarIcon />
                  </ListItemIcon>
                  <ListItemText>My Cars</ListItemText>
                </ListItem>

                <ListItem component={Link} to="/profile" button key={2}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItem>

                <ListItem component={Link} to="/service" button key={3}>
                  <ListItemIcon>
                    <Build />
                  </ListItemIcon>
                  <ListItemText>Service</ListItemText>
                </ListItem>

                <ListItem component={Link} to="/eshop" button key={4}>
                  <ListItemIcon>
                    <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText>E-shop</ListItemText>
                </ListItem>

                <ListItem component={Link} to="/newcar" button key={5}>
                  <ListItemIcon>
                    <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText>Register car</ListItemText>
                </ListItem>
              </List>

              <List>
                <ListItemButton selected onClick={handleAccClick}>
                  <ListItemText
                    primary="Other items"
                    primaryTypographyProps={{
                      color: "secondary",
                    }}
                  />
                  {openAcc ? (
                    <ExpandLess color="secondary" />
                  ) : (
                    <ExpandMore color="secondary" />
                  )}
                </ListItemButton>
                <Collapse in={openAcc} timeout="auto" unmountOnExit onClick={handleDrawerClose}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                      <ListItemText primary="Collapsible item" />
                    </ListItemButton>
                  </List>

                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                      <ListItemText primary="Collapsible item 2" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              {/* error somewhere above */}
            </Drawer>
          </ThemeProvider>
        </Box>
      )}
    </>
  );
};

export default Navbar;
