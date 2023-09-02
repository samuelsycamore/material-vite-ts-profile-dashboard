import Box, { BoxProps } from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

export default function EditorToolbar({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "flex",
          gap: 0.5,
          "& > button": { "--Icon-fontSize": "16px" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Select defaultValue="1" sx={{ minWidth: 160 }}>
        <MenuItem value="1">Normal text</MenuItem>
        <MenuItem value="2" sx={{ fontFamily: "code" }}>
          Code text
        </MenuItem>
      </Select>
      <IconButton>sup</IconButton>
      <IconButton>sup</IconButton>
      <IconButton>sup</IconButton>
      <IconButton>sup</IconButton>
    </Box>
  );
}
