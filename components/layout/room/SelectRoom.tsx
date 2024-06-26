import Box from "@mui/material/Box";

export default function SelectRoom({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "white",
          border: "1px solid #bdbdbd",
          borderRadius: "0.3125rem",
          width: "100%",
        }}
      >
        <div>{children}</div>
      </Box>
    </div>
  );
}
