import React from 'react';
import { Route, Navigate, Outlet  } from 'react-router-dom';
import { isAuthenticated } from './AuthService';

const PrivateRoute = ({ element: Element, ...rest }) => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
  };
  
  export default PrivateRoute;