import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddToken from './pages/addToken/AddToken';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/add-token" element={ <AddToken /> } />
      <Route path="/edit-token" element={ <Home /> } />
    </Routes>
  );
};

export default App;
