import { Box, Typography } from '@mui/material'
import React from 'react'
import { Column } from './Column'
import { useSelector } from 'react-redux';

const spaceColumns = [
    { name: 'Backlog', reference: 'backlog' },
    { name: 'In progress', reference: 'in-progress' },
    { name: 'QA', reference: 'qa' },
    { name: 'Done', reference: 'done' }
];

export const Board = () => {
    const tasks = useSelector(state => state.jira.tasks);

    return (
        <>
            <Box>
                <Typography variant="h5">Agile board</Typography>
            </Box>
            <input type="text" />
            <Box sx={{ display: 'flex', gap: '8px' }}>
                {spaceColumns.map((val, index) => (
                    <Column key={index} name={val.name} taskCards={tasks.filter(task => task.status === val.reference)} status={val.reference} />
                ))}
            </Box>
        </>
    )
}
