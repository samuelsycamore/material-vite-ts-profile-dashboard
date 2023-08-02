import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export default function FileUpload({
  icon,
  fileName,
  fileSize,
  progress,
  sx,
  ...props
}: CardProps & {
  icon?: React.ReactElement;
  fileName: string;
  fileSize: string;
  progress: number;
}) {
  return (
    <Card
      {...props}
      sx={[
        {
          gap: 1.5,
          alignItems: "flex-start",
          ...(progress >= 100 && {
            borderColor: "primary.500",
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>{icon ?? "sup"}</div>
      <CardContent>
        <Typography fontSize="sm">{fileName}</Typography>
        <Typography>{fileSize}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LinearProgress value={progress} sx={{ bgcolor: "neutral.softBg" }} />
          <Typography fontSize="xs">{progress}%</Typography>
        </Box>
      </CardContent>
      {progress >= 100 ? (
        <div>sup</div>
      ) : (
        <IconButton sx={{ mt: -1, mr: -1 }}>sup</IconButton>
      )}
    </Card>
  );
}
