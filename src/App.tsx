import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import DocDrawer from "./components/DocDrawer";
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

export default function App(props: any) {
  const { theme } = useThemeContext();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <DocDrawer
          window={window}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
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
