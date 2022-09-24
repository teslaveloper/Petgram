import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
isAllowed,
redirectPath = '/not_registered',
children }
) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};