import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { NavLink, Outlet } from "react-router-dom"
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
export const AppLayout = () => {
  const mode = useSelector((state) => state.theme.colorTheme)
  const themeSelected = getTheme(mode)
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'lavender' }}>
        <Toolbar sx={{ gap: "16px", color: "#434141ff"}}>
          <WindowOutlinedIcon/>
          <img src="src\assets\jira_logo.png" alt="logo Jira" width="70px" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 220,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 220, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Divider/>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {elementsJiraNav.map((val, index) => (
              <NavLink key={index} to={`/${val.name.toLowerCase()}`} style={{textDecoration:'none', color:'gray'}}>
              {({isActive}) => (
                <ListItem disablePadding
                sx={{ backgroundColor: isActive? themeSelected.palette.primary.main : 'transparent'}}
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
      <Box sx={{ flexGrow: 1, marginTop:'64px', display:'flex', flexDirection:'column' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
