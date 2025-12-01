import styles from './TaskForm.module.css'
import { Box, Button } from '@mui/material';
import { SelectAvatar } from './SelectAvatar';
import { useTaskForm } from '../../hooks/useTaskForm';


export const TaskForm = ({ nameColumn, showIssue }) => {
  
  const {inputRef, submitInfo, setAssigneFinal} = useTaskForm({nameColumn, showIssue})

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: '12px', gap: '12px', backgroundColor: 'secondary.secondary', color:'text.primary',borderRadius: '8px', width: '258px', boxSizing: 'border-box' }}>
      <input ref={inputRef} type="text" placeholder="Write the new task" className={styles.inputForm} /> 
      <Box sx={{display:'flex'}}>
        <SelectAvatar nameAvatar="userRose" updateAssign={setAssigneFinal} />
        <Button onClick={submitInfo} sx={{backgroundColor: "primary.main", color: "neutral.main"}}>ADD</Button>
      </Box>
    </Box>
  )
}
