/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Link from "@mui/material/Link";
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiLogo from "./MuiLogo";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../utils";

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

const Dropdown = styled("i")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export default function Sidebar() {
  return (
    <Stack
      className="Sidebar"
      sx={{
        position: {
          xs: "fixed",
          md: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "30%",
          backgroundColor: "black",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        className="Sidebar"
        sx={{
          height: "100dvh",
          width: "300px",
          top: 0,
          p: 1.5,
          py: 3,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRight: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <MuiLogo />
          <Typography fontWeight="xl">MUI</Typography>
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
                <div>
                  <i data-feather="home" />
                </div>
                <div>Home</div>
                <Dropdown data-feather="chevron-down" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="bar-chart-2" />
                </div>
                <div>Dashboard</div>
                <Dropdown data-feather="chevron-down" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="layers" />
                </div>
                <div>Projects</div>
                <Dropdown data-feather="chevron-down" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="check-square" />
                </div>
                <div>Tasks</div>
                <Dropdown data-feather="chevron-down" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="flag" />
                </div>
                <div>Reporting</div>
                <Dropdown data-feather="chevron-down" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="bar-chart-2" />
                </div>
                <div>Users</div>
                <i data-feather="chevron-up" />
              </ListItemButton>
              <List>
                <ListItem>
                  <ListItemButton selected color="primary">
                    My Profile
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>New user</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Role & Permission</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
          <List
            sx={{
              mt: "auto",
              flexGrow: 0,
              "--ListItem-radius": "8px",
              "--List-gap": "8px",
            }}
          >
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="life-buoy" />
                </div>
                <div>Supports</div>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <div>
                  <i data-feather="settings" />
                </div>
                <div>Settings</div>
              </ListItemButton>
            </ListItem>
          </List>
          <Card sx={{ boxShadow: "none" }}>
            <Typography fontSize="sm" fontWeight="lg" mb={0.5}>
              Used space
            </Typography>
            <Typography>
              Your team has used 80% of your available space. Need more?
            </Typography>
            <LinearProgress value={80} sx={{ my: 1.5 }} />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link fontSize="sm" component="button" fontWeight="lg">
                Upgrade plan
              </Link>
              <Link fontSize="sm" component="button">
                Dismiss
              </Link>
            </Box>
          </Card>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar src="/static/images/avatar/3.jpg" />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography fontSize="sm" fontWeight="lg">
              Sam Sycamore
            </Typography>
            <Typography>sam@sycamore.com</Typography>
          </Box>
          <IconButton>
            <i data-feather="log-out" />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
}
