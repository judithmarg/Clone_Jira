import { Box, Typography } from '@mui/material'
import React from 'react'
import { Column } from './Column'
import { useSelector } from 'react-redux';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectTask, updateStatus } from '../../store/slice/jiraSlice';

const spaceColumns = [
    { name: 'Backlog', reference: 'backlog' },
    { name: 'In progress', reference: 'in-progress' },
    { name: 'QA', reference: 'qa' },
    { name: 'Done', reference: 'done' }
];

export const Board = () => {
    const tasks = useSelector(state => state.jira.tasks);
    const dispatch = useDispatch();

    const [data, setData] = useState(tasks);

    const handleChangeColumn = (event) => {
        const { active, over } = event;
        console.log(event)
        if (!over) return;
        
        const taskCurrent = data.filter(t => t.id === active.id)
        dispatch(selectTask(taskCurrent[0]))
        dispatch(updateStatus(over.id))
        setData(tasks)
    }

    return (
        <>
            <Box>
                <Typography variant="h5">Agile board</Typography>
            </Box>
            <input type="text" />
            <Box sx={{ display: 'flex', gap: '8px' }}>
                <DndContext onDragEnd={handleChangeColumn}>{spaceColumns.map((val, index) => (
                    <Column key={index} name={val.name} taskCards={tasks.filter(task => task.status === val.reference)} status={val.reference} />
                ))}
                </DndContext>
            </Box>
        </>
    )
}
