import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Input from "@mui/material/Input";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 240;

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridDirection: "column",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function ResponsiveDrawer(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton>
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography>Acme Co.</Typography>
        <ColorSchemeToggle />
      </Box>
      <Input placeholder="Search" />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <Typography>Home</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <DashboardRoundedIcon />
              <Typography>Dashboard</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              role="menuitem"
              component="a"
              href="/joy-ui/getting-started/templates/order-dashboard/"
            >
              <ShoppingCartRoundedIcon />
              <Typography>Orders</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <Typography>Tasks</Typography>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>All tasks</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Backlog</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>In progress</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Done</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>

          <ListItem>
            <ListItemButton role="menuitem" component="a" href="/">
              <QuestionAnswerRoundedIcon />
              <Typography>Messages</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Toggler
              defaultExpanded
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <GroupRoundedIcon />
                  <Typography>Users</Typography>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton selected>My profile</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Create a new user</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Roles & permission</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>

        <List
          sx={{
            mt: "auto",
            flexGrow: 0,
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List>
        <Card sx={{ boxShadow: "none" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Used space</Typography>
            <IconButton>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Typography>
            Your team has used 80% of your available space. Need more?
          </Typography>
          <LinearProgress value={80} sx={{ my: 1 }} />
          <Button>Upgrade plan</Button>
        </Card>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography>Siriwat K.</Typography>
          <Typography>siriwatk@test.com</Typography>
        </Box>
        <IconButton>
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
