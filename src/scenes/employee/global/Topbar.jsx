import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleLogout = () => {
    // Perform any logout actions here

    // Redirect to the login page
    navigate("/", { replace: true });
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontWeight: "bold",
          }}
        >
          Add Work Log
        </Button>
        <Box sx={{ width: 10 }}></Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontWeight: "bold",
          }}
        >
          Checkin
        </Button>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
