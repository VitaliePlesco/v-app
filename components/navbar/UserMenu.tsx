import { useState } from "react";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function UserMenu() {
  const [element, setElement] = useState<null | HTMLElement>(null);
  const open = Boolean(element);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setElement(null);
  };

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Button
        onClick={handleOpenMenu}
        size="large"
        variant="outlined"
        color="inherit"
        sx={{
          padding: ".5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        endIcon={<AccountCircleIcon />}
      >
        Hi, user
      </Button>
      <Menu
        open={open}
        onClose={handleCloseMenu}
        anchorEl={element}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseMenu}>
            {setting}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
