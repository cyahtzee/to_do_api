import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import List from './List';

export default function Create() {
  const firstName = 'John';
  const [tasks, setTask] = React.useState(JSON.parse(localStorage.getItem("tasks")) || []);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  function addTask() {
    const newTask = {
      id: tasks.length + 1,
      title: 'New Task',
      description: 'New Task Description',
      done: false
    };
    setTask([...tasks, newTask]);
  }
  return (
    <>
      <h1>
        Hello from Create
      </h1>
      <h1>Hello {firstName}</h1>
      <button onClick={addTask}>Add Task</button>
      <Link to="/tasks">Back to Tasks</Link>
    </>
  )
}
