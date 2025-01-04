import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Home from './Pages/Home';
import PrivatePage from './Components/privatepage';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={
        

        <PrivatePage>
        <Products />
        </PrivatePage>
        } />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Allroutes;
