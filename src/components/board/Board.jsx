import { Box, Typography } from '@mui/material'
import { Column } from './Column'
import { DndContext } from '@dnd-kit/core';
import { useBoard } from '../../hooks/useBoard';
import { InputText } from '../shared/InputText';
import SearchIcon from '@mui/icons-material/Search';

export const Board = () => {
    const {spaceColumns, tasks, handleChangeColumn, filteredTasks, search, handleChangeSearch } = useBoard();

    return (
        <>
            <Box>
                <Typography variant="h5" sx={{color:'text.primary'}}>Agile board</Typography>
            </Box>
            <InputText title="Search" Icon={<SearchIcon/>} type="text" name="search" value={search} handleOnChange={handleChangeSearch} />
            {search === "" ? (<Box sx={{ display: 'flex', gap: '8px' }}>
                <DndContext onDragEnd={handleChangeColumn}>{spaceColumns.map((val, index) => (
                    <Column key={index} name={val.name} taskCards={tasks.filter(task => task.status === val.reference)} status={val.reference} />
                ))}
                </DndContext>
            </Box>):(
                <Box sx={{ display: 'flex', gap: '8px' }}>
                <DndContext onDragEnd={handleChangeColumn}>{spaceColumns.map((val, index) => (
                    <Column key={index} name={val.name} taskCards={filteredTasks.filter(task => task.status === val.reference)} status={val.reference} />
                ))}
                </DndContext>
            </Box>
            )}
        </>
    )
}
