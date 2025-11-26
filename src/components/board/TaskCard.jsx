import { useDraggable } from '@dnd-kit/core'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { SelectAvatar } from './SelectAvatar';

export const TaskCard = ({ id, task, handleSelectedCard }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='card' >
            <Box sx={{ display: 'flex', flexDirection: 'column', p: '12px', gap: '12px', backgroundColor: 'secondary.main', borderRadius: '8px', width: '258px', boxSizing: 'border-box' }}>
                <Typography sx={{ fontSize: '14px' }}>{task.title}</Typography>
                <Box sx={{mt:'16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography variant="button" >{task.type}</Typography>
                    <SelectAvatar nameAvatar={task.assignee} read/> 
                </Box>
                {/* <Button sx={{color:"neutral.secondary"}}onClick={handleOnClick}>Details</Button> */}
            </Box>
            
        </div>
    )
}
