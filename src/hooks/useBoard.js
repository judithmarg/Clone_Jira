import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch, selectTask, updateStatus } from '../store/slice/jiraSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDebounce } from './useDebounce';
import { useEffect } from 'react';


const spaceColumns = [
    { name: 'Backlog', reference: 'backlog', next: 'in-progress', role:'Developer' },
    { name: 'In progress', reference: 'in-progress', next: 'qa', role:'Developer' },
    { name: 'QA', reference: 'qa', next: 'done', role:'QA' },
    { name: 'Done', reference: 'done', next: 'none', role:'NONE' }
];

export const useBoard = () => {
    const tasks = useSelector(state => state.jira.tasks);
    const currentUser = useSelector(state => state.jira.currentUser);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const debounceValueA = useDebounce(search, 1000);
    const filteredTasks = useSelector(state => state.jira.filteredTasks);

    const handleChangeColumn = (event) => {
        const { active, over } = event;
        if (!over) return;

        const taskCurrent = tasks.find(t => t.id === active.id)
        dispatch(selectTask(taskCurrent))
        const allowedStatus = spaceColumns.
                                find(s => s.next === over.id && taskCurrent.status === s.reference && currentUser.role === s.role)
        if (allowedStatus) {
            dispatch(updateStatus(over.id))
        } else{
            alert("You can't move in this way")
        }

    }

    const handleChangeSearch = ({target}) => {
        setSearch(target.value)
    }

    useEffect(() => {
        const fetchingWithDebounce = async() => {
            try {
                dispatch(filterBySearch(debounceValueA))
            } catch (error) {
                console.error(error)
            }
        }
        fetchingWithDebounce();
    }, [debounceValueA])

    return {spaceColumns, tasks, handleChangeColumn, filteredTasks, search, handleChangeSearch }
}
