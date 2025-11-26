import { Box, Button, Typography } from '@mui/material'
import { TaskCard } from './TaskCard'
import { useState } from 'react'
import { TaskForm } from './TaskForm'
import { useDroppable } from '@dnd-kit/core'
import { useDispatch } from 'react-redux'
import { selectTask } from '../../store/slice/jiraSlice'

export const Column = ({ name, taskCards, status }) => {
    const { setNodeRef } = useDroppable({ id: status });
    const dispatch = useDispatch();

    const [showNewIssue, setShowNewIssue] = useState(false);
    const handleCreateCard = () => {
        setShowNewIssue(!showNewIssue);
    }

    return (
        <div ref={setNodeRef} className="space-box">
            <Box sx={{ width: '270px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '6px', backgroundColor: 'primary.main', borderRadius: '8px', alignItems: 'center' }}>
                <Box sx={{ p: '16px', alignSelf: 'flex-start' }}>
                    <Typography sx={{ fontWeight: '600', textTransform: 'uppercase',color:'neutral.main'}}>{name}</Typography>
                </Box>
                {taskCards.map(task => (
                    <TaskCard key={task.id} id={task.id} task={task} handleSelectedCard={(t)=> dispatch(selectTask(t))}/>
                ))}
                <Box sx={{ color: 'neutral.main', mb:'8px', alignSelf:'center' }}>
                    {showNewIssue ? (
                        <TaskForm nameColumn={status} showIssue={handleCreateCard}/>
                    ) : (
                        <Button variant='outlined' sx={{ color: 'neutral.main' }} onClick={handleCreateCard}>+ Create issue</Button>
                    )}
                </Box>
            </Box>
        </div>
    )
}
