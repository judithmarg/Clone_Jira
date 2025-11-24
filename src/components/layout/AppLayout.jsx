import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Outlet } from "react-router-dom"

const elementsJiraNav = [
  { name: 'Summary', icon: <LanguageOutlinedIcon /> },
  { name: 'Backlog', icon: <TableRowsOutlinedIcon /> },
  { name: 'Board', icon: <ViewColumnOutlinedIcon /> },
  { name: 'Code', icon: <CodeOutlinedIcon /> },
  { name: 'Pages', icon: <ArticleOutlinedIcon /> },
  { name: 'Calendar', icon: <CalendarTodayOutlinedIcon /> },
]
export const AppLayout = () => {
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
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {val.icon}
                  </ListItemIcon>
                  <ListItemText primary={val.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
