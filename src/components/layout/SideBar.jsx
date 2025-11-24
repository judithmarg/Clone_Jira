import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import { getTheme } from "../../theme/getTheme";

const elementsJiraNav = [
    { name: 'Summary', icon: <LanguageOutlinedIcon /> },
    { name: 'Backlog', icon: <TableRowsOutlinedIcon /> },
    { name: 'Board', icon: <ViewColumnOutlinedIcon /> },
    { name: 'Code', icon: <CodeOutlinedIcon /> },
    { name: 'Pages', icon: <ArticleOutlinedIcon /> },
    { name: 'Calendar', icon: <CalendarTodayOutlinedIcon /> },
]

export const SideBar = () => {
    const mode = useSelector((state) => state.theme.colorTheme)
    const themeSelected = getTheme(mode)
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 220,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 220, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Divider />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {elementsJiraNav.map((val, index) => (
                        <NavLink key={index} to={`/${val.name.toLowerCase()}`} style={{ textDecoration: 'none', color: 'gray' }}>
                            {({ isActive }) => (
                                <ListItem disablePadding
                                    sx={{ backgroundColor: isActive ? themeSelected.palette.primary.main : 'transparent' }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {val.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={val.name} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
