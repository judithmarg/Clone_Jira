import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";


export const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header/>
      <SideBar/>
      <Box sx={{ flexGrow: 1, marginTop:'64px', display:'flex', flexDirection:'column', backgroundColor:'background.default', minHeight: 'calc(100vh - 80px)', p:"24px", gap:'16px' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
