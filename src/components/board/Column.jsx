import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { TaskCard } from './TaskCard'
import { useState } from 'react'
import { TaskForm } from './TaskForm'

export const Column = ({ name, taskCards, status }) => {
    const [showNewIssue, setShowNewIssue] = useState(false);
    const handleCreateCard = () => {
        setShowNewIssue(true);
    }

    return (
        <Box sx={{ width: '270px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '6px', backgroundColor: 'primary.main', borderRadius: '8px', alignItems: 'center' }}>
            <Box sx={{ p: '16px', alignSelf: 'flex-start' }}>
                <Typography sx={{ fontWeight: '600', textTransform: 'uppercase' }}>{name}</Typography>
            </Box>
            {taskCards.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
            <Box sx={{ alignSelf: 'flex-start', color: 'neutral.main' }}>
                {showNewIssue ? (
                    <TaskForm nameColumn={status}/>
                ) : (
                    <Button variant='outlined' sx={{ color: 'neutral.main' }} onClick={handleCreateCard}>+ Create issue</Button>
                )}
            </Box>
        </Box>
    )
}
