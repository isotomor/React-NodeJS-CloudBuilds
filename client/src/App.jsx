import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Views/Home/Home';
import Register from './Views/Register/Register';
import UsersDatabase from './Views/UsersDatabase/UsersDatabase';




import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/database" element={<UsersDatabase />} />
 
       
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
