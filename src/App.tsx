import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Avatar from "@mui/material/Avatar";
import DropZone from "./components/DropZone";
import CountrySelector from "./components/CountrySelector";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EditorToolbar from "./components/EditorToolbar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FileUpload from "./components/FileUpload";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import ColorSchemeToggle from "./components/ColorSchemeToggle";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
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

function DocDrawer(props: any) {
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
          display: { xs: "block", sm: "none" },
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

export default function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <DocDrawer />
        <Box>
          <Typography variant="h6" component="h1" sx={{ mt: 2 }}>
            My profile
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs>
              <Tab label="Account settings" sx={{ pl: 0 }} />
              <Tab label="Team" />
              <Chip label="2" size="small" sx={{ mt: 1.4 }} />
              <Tab label="Plan" />
              <Tab label="Billing" />
              <Chip label="4" size="small" sx={{ mt: 1.4 }} />
              <Tab label="Notifications" />
              <Tab label="Integrations" />
              <Tab label="API" />
            </Tabs>
          </Box>
          <Box
            sx={{
              pt: 3,
              pb: 10,
              display: "grid",
              gridTemplateColumns: {
                xs: "100%",
                sm: "minmax(120px, 30%) 1fr",
                lg: "280px 1fr minmax(120px, 208px)",
              },
              columnGap: { xs: 2, sm: 3, md: 4 },
              rowGap: { xs: 2, sm: 2.5 },
              "& > hr": {
                gridColumn: "1/-1",
              },
            }}
          >
            <FormLabel sx={{ display: { xs: "none", sm: "block" } }}>
              Name
            </FormLabel>
            <Box sx={{ display: { xs: "contents", sm: "flex" }, gap: 2 }}>
              <FormControl sx={{ flex: 1 }}>
                <FormLabel sx={{ display: { sm: "none" } }}>
                  First name
                </FormLabel>
                <Input placeholder="first name" defaultValue="Sam" />
              </FormControl>
              <FormControl sx={{ flex: 1 }}>
                <FormLabel sx={{ display: { sm: "none" } }}>
                  Last name
                </FormLabel>
                <Input placeholder="last name" defaultValue="Sycamore" />
              </FormControl>
            </Box>

            <FormControl sx={{ display: { sm: "contents" } }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="email"
                defaultValue="sam@mui.com"
              />
            </FormControl>
          </Box>
          <Box>
            <FormLabel>Your photo</FormLabel>
            <FormHelperText>
              This will be displayed on your profile.
            </FormHelperText>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 2.5,
            }}
          >
            <Avatar />
            <DropZone />
          </Box>
          <FormControl sx={{ display: { sm: "contents" } }}>
            <FormLabel>Role</FormLabel>
            <Input defaultValue="UI Developer" />
          </FormControl>

          <CountrySelector />

          <FormControl sx={{ display: { sm: "contents" } }}>
            <FormLabel>Timezone</FormLabel>
            <Select defaultValue="1">
              <MenuItem value="1">
                Central Time (Chicago) <Typography>— GMT-05:00</Typography>
              </MenuItem>
              <MenuItem value="2">
                Eastern Time (Detroit) <Typography>— GMT-4:00</Typography>
              </MenuItem>
            </Select>
          </FormControl>
          <Box>
            <FormLabel>Bio</FormLabel>
            <FormHelperText>Write a short introduction.</FormHelperText>
          </Box>
          <Box>
            <EditorToolbar />
            <TextareaAutosize
              minRows={4}
              defaultValue="I'm a software developer based in Minneapolis, MN, USA. My specialty is JavaScript, and I mainly work with React and Next.js."
            />
            <FormHelperText sx={{ mt: 0.75, fontSize: "xs" }}>
              275 characters remaining
            </FormHelperText>
          </Box>
          <Box>
            <FormLabel>Portfolio projects</FormLabel>
            <FormHelperText>Share a few snippets of your work.</FormHelperText>
          </Box>
          <Stack useFlexGap spacing={1.5}>
            <DropZone />

            <FileUpload
              fileName="Tech design requirements.pdf"
              fileSize="200 KB"
              progress={100}
            />

            <FileUpload
              icon={<i data-feather="film" />}
              fileName="Dashboard prototype recording.mp4"
              fileSize="16 MB"
              progress={40}
            />

            <FileUpload
              icon={<i data-feather="upload-cloud" />}
              fileName="Dashboard prototype FINAL.fig"
              fileSize="4.2 MB"
              progress={80}
            />
          </Stack>
          <Box
            sx={{
              gridColumn: "1/-1",
              justifySelf: "flex-end",
              display: "flex",
              gap: 1,
            }}
          >
            <Button>Cancel</Button>
            <Button>Save</Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
