import {getToken} from '../../../utils/localStorage';
import {Navigate, useLocation} from 'react-router-dom';
import React from 'react';

interface IRequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({children}: IRequireAuthProps ) {
  const token = getToken();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{from: location}} replace />;
  }
  return children;
}

export default RequireAuth;
