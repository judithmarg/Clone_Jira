import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import { getTheme } from "../../theme/getTheme";
import { Header } from "./Header";
import { SideBar } from "./SideBar";


export const AppLayout = () => {
  const mode = useSelector((state) => state.theme.colorTheme)
  const themeSelected = getTheme(mode)
  return (
    <Box sx={{ display: 'flex' }}>
      <Header/>
      <SideBar/>
      <Box sx={{ flexGrow: 1, marginTop:'64px', display:'flex', flexDirection:'column', backgroundColor:'background.default', minHeight: 'calc(100vh - 80px)' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
