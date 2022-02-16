import React from 'react';
import { Link } from 'react-router-dom';
import RadarComp from './RadarComp';
import Split from 'react-split';
import Editor from './Editor';

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
      <Link to="/tasks/new">New Task</Link>
      <Split
        sizes={[30, 70]}
        direction="horizontal"
        style={{ display: 'flex' }}

      >
        <ul>
          {tasks.map(task => <li>{task.id}</li>)}
        </ul>
        <Editor />
      </Split>
    </div>
  )
}
