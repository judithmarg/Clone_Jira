import React from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../../store/slice/jiraSlice';
import { useRef } from 'react';
import { Box } from '@mui/material';

export const TaskForm = ({nameColumn}) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const submitInfo = (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      console.log("here", inputRef.current.value)
      dispatch(createTask({titleA:inputRef.current.value, statusA:nameColumn}))
    }
    
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: '12px', gap: '12px', backgroundColor: 'secondary.main', borderRadius: '8px', width: '258px', boxSizing: 'border-box' }}>
      <input ref={inputRef} type="text" onKeyDown={(e)=>submitInfo(e)} />
    </Box>
  )
}
