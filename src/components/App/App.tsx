import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from '../pages/Login/Login';
import AdminLayout from '../AdminLayout/AdminLayout';
import Cars from '../pages/Admin/Cars/Cars';
import Car from '../pages/Admin/Cars/Car/Car';
import {Box} from '@mui/material';
import {app} from './AppStyle';
import Home from '../pages/Home/Home';

function App() {
  return (
    <Box sx={app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="car" element={<Cars />} />
          <Route path="car/:id" element={<Car />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
