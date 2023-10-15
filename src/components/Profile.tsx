import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Avatar from "@mui/material/Avatar";
import DropZone from "./DropZone";
import CountrySelector from "./CountrySelector";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EditorToolbar from "./EditorToolbar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FileUpload from "./FileUpload";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Profile() {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          px: {
            xs: 2,
            md: 6,
          },
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" href="#some-link" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            href="#some-link"
            fontSize={12}
            fontWeight={500}
          >
            Users
          </Link>
          <Typography fontWeight={500} fontSize={12}>
            My profile
          </Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="h6" component="h1" sx={{ mt: 2 }}>
        My profile
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs value={0}>
          <Tab label="Settings" sx={{ pl: 0 }} />
          <Tab label="Team" />
          <Tab label="Plan" />
          <Tab label="Billing" />
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: {
            xs: 2,
            md: 6,
          },
          py: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography>Personal info</Typography>
            <Typography>
              Customize how your profile information will apper to the networks.
            </Typography>
          </Box>
          <Divider />
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
                defaultValue="sam@sycamore.com"
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
        </Card>

        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography>Bio</Typography>
            <Typography>
              Write a short introduction to be displayed on your profile
            </Typography>
          </Box>
          <Divider />
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
        </Card>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography>Portfolio projects</Typography>
            <Typography>Share a few snippets of your work.</Typography>
          </Box>

          <Divider />
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
        </Card>
      </Stack>
    </Box>
  );
}
