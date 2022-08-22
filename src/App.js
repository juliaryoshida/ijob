import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cadastro' element={<Cadastro/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
