import { useDraggable } from '@dnd-kit/core'
import { Box, Button, Typography } from '@mui/material'

export const TaskCard = ({ id, task, handleSelectedCard }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined
    }

    const handleOnClick = (task) => {
        console.log("llegue")
        handleSelectedCard(task)
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='card' >
            <Box sx={{ display: 'flex', flexDirection: 'column', p: '12px', gap: '12px', backgroundColor: 'secondary.main', borderRadius: '8px', width: '258px', boxSizing: 'border-box' }}>
                <Typography sx={{ fontSize: '14px' }}>{task.title}</Typography>
                <Button onClick={handleOnClick}>hi</Button>
            </Box>
            
        </div>
    )
}
