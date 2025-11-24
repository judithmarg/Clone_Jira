import { AppBar, Toolbar } from "@mui/material"
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';

export const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'lavender' }}>
            <Toolbar sx={{ gap: "16px", color: "#434141ff" }}>
                <WindowOutlinedIcon />
                <img src="src\assets\jira_logo.png" alt="logo Jira" width="70px" />
            </Toolbar>
        </AppBar>
    )
}
