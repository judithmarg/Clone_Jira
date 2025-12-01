import { AppBar, Toolbar } from "@mui/material"
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
    import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slice/jiraSlice";
import { useSelector } from "react-redux";
import { SelectAvatar } from "../board/SelectAvatar";
import { SwitchMode } from "../shared/SwitchMode";

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const currentUser = useSelector(state => state.jira.currentUser)
    const dispatch = useDispatch()

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'secondary.secondary' }}>
            <Toolbar sx={{ gap: "16px", color: "#434141ff", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{display:'flex', gap:'12px', alignItems:'center'}}>
                    <WindowOutlinedIcon />
                    <img src="src\assets\jira_logo.png" alt="logo Jira" width="70px" />
                </Box>
                <Box sx={{display:'flex', gap:'12px', alignItems:'center'}}>
                    <SwitchMode/>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <SelectAvatar nameAvatar={currentUser.name} read/>
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}
