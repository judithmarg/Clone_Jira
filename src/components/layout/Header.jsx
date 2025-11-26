import { AppBar, Toolbar } from "@mui/material"
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slice/jiraSlice";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout =()=>{
    dispatch(logoutUser())
  }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'lavender' }}>
            <Toolbar sx={{ gap: "16px", color: "#434141ff", display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <Box>
                <WindowOutlinedIcon />
                <img src="src\assets\jira_logo.png" alt="logo Jira" width="70px" />
</Box>
                <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
            </Toolbar>
        </AppBar>
    )
}
