import React from 'react';
import { Link } from 'react-router-dom';
import RadarComp from './RadarComp';

export default function List() {
  return (
    <div>
      <h1>
        Hello from List
      </h1>
      <Link to="/tasks/new">New Task</Link>
      <RadarComp />
    </div>
  )
}
