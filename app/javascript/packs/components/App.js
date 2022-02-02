import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import List from "./List";
import Create from "./Create";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/tasks" element={<List />} />
        <Route path="/tasks/new" element={<Create />} />
      </Routes>
    </>
  )
}
