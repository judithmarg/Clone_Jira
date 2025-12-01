import { Box, Typography } from '@mui/material'
import { Column } from './Column'
import { DndContext } from '@dnd-kit/core';
import { useBoard } from '../../hooks/useBoard';

export const Board = () => {
    const {spaceColumns, tasks, handleChangeColumn } = useBoard();

    return (
        <>
            <Box>
                <Typography variant="h5" sx={{color:'text.primary'}}>Agile board</Typography>
            </Box>
            {/* <input type="text" /> */}
            <Box sx={{ display: 'flex', gap: '8px' }}>
                <DndContext onDragEnd={handleChangeColumn}>{spaceColumns.map((val, index) => (
                    <Column key={index} name={val.name} taskCards={tasks.filter(task => task.status === val.reference)} status={val.reference} />
                ))}
                </DndContext>
            </Box>
        </>
    )
}
