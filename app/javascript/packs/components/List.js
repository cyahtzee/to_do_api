import React from 'react';
import { Link } from 'react-router-dom';
import RadarComp from './RadarComp';

export default function List() {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem("tasks")) || []);
  // React.useEffect(() => {
  //   fetch('/api/v1/tasks')
  //     .then(response => response.text())
  //     .then(data => setTasks(data))
  //     .catch(error => console.log(error));
  // }, [tasks]);

  return (
    <div>
      <h1>Hello from List</h1>
      <ul>
        {tasks.map(task => <li>{task.id}</li>)}
      </ul>
      <Link to="/tasks/new">New Task</Link>
      <RadarComp />
    </div>
  )
}
