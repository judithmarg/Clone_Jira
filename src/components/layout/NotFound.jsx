import { Box, Typography } from '@mui/material'
import React from 'react'

export const NotFound = () => {
  return (
    <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center', height: '100%'}}>
        <Typography sx={{color: 'text.primary'}}>Not found, this route still is in progress</Typography>
    </Box>
  )
}
