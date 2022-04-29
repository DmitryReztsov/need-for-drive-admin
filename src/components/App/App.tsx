import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from '../pages/Login/Login';
import AdminLayout from '../AdminLayout/AdminLayout';
import {Box} from '@mui/material';
import {app} from './AppStyle';
import Home from '../pages/Admin/Home/Home';
import RequireAuth from '../common/RequireAuth/RequireAuth';
import {adminRouteList} from './AdminRouteList';

function App() {
  return (
    <Box sx={app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          {adminRouteList.map(({route, element}) => {
            return <Route key={route} path={route} element={element} />;
          })}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
