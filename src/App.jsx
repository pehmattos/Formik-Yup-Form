import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';

function App() {
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
