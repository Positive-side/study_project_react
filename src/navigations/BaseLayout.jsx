import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
