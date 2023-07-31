import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Destination from './pages/destination';
import Experience from './pages/experience';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/destinos/:id' element={<Destination />} />
          <Route path='/experiencias/:id' element={<Experience />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
