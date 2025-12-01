import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createTask } from '../store/slice/jiraSlice';
import { useRef } from 'react';

export const useTaskForm = ({nameColumn, showIssue}) => {
  const dispatch = useDispatch();
  const [assigneFinal, setAssigneFinal] = useState(null);
  let inputRef = useRef(null);

  const submitInfo = () => {
    if(inputRef.current.value === null) return;
    const newTask = { titleA: inputRef.current.value, statusA: nameColumn, assigneA: assigneFinal?.name || "userRose"};
    dispatch(createTask(newTask))
    showIssue()
  }

  return {inputRef, submitInfo, setAssigneFinal}
}
