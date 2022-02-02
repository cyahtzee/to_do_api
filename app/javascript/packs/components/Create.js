import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import List from './List';

export default function Create() {
  const firstName = 'John';
  return (
    <>
      <h1>
        Hello from Create
        <h1>Hello {firstName}</h1>
      </h1>
      <Link to="/tasks">Back to Tasks</Link>
    </>
  )
}
