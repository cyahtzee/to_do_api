import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

function CreateNav() {
  return (
    <nav>Hello World</nav>
  )
}

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.querySelector('#root')
//   )
// })

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(< CreateNav />, document.querySelector('#root'))
})
