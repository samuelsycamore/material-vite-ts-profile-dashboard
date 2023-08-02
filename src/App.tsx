import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

export default function App() {
  return (
    <Container>
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
            <FormLabel sx={{ display: { sm: "none" } }}>First name</FormLabel>
            <Input placeholder="first name" defaultValue="Sam" />
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <FormLabel sx={{ display: { sm: "none" } }}>Last name</FormLabel>
            <Input placeholder="last name" defaultValue="Sycamore" />
          </FormControl>
        </Box>

        <FormControl sx={{ display: { sm: "contents" } }}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="email"
            defaultValue="sam@sycamore.garden"
          />
        </FormControl>
      </Box>
    </Container>
  );
}
