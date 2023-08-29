import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Examples, Home, Products } from '@/pages';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/examples" element={<Examples />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Router;
