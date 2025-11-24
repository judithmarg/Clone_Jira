import { Box, Typography } from '@mui/material'

export const TaskCard = ({task}) => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', p:'12px',gap:'12px', backgroundColor:'secondary.main', borderRadius:'8px', width:'258px', boxSizing:'border-box'}}>
        <Typography sx={{fontSize:'14px'}}>{task.title}</Typography>
    </Box>
  )
}
