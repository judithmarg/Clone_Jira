import styles from './TaskForm.module.css'
import { useDispatch } from 'react-redux'
import { createTask } from '../../store/slice/jiraSlice';
import { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { SelectAvatar } from './SelectAvatar';
import { useState } from 'react';

export const TaskForm = ({ nameColumn, showIssue }) => {
  const dispatch = useDispatch();
  const [assigneFinal, setAssigneFinal] = useState(null);
  let inputRef = useRef(null);

  const submitInfo = () => {
    if(inputRef.current.value === null) return;
    const newTask = { titleA: inputRef.current.value, statusA: nameColumn, assigneA: assigneFinal?.name || "userRose"};
    dispatch(createTask(newTask))
    showIssue()
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: '12px', gap: '12px', backgroundColor: 'secondary.main', borderRadius: '8px', width: '258px', boxSizing: 'border-box' }}>
      <input ref={inputRef} type="text" placeholder="Write the new task" className={styles.inputForm} /> 
      <Box sx={{display:'flex'}}>
        <SelectAvatar nameAvatar="userRose" updateAssign={setAssigneFinal} />
        <Button onClick={submitInfo} sx={{backgroundColor: "primary.main", color: "neutral.main"}}>ADD</Button>
      </Box>
    </Box>
  )
}
