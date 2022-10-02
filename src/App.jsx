import React from 'react';
import { AuthProvider } from './AuthProviderManager';

import { Link } from 'react-router-dom';
import { GlobalStyles } from 'components/styles/GlobalStyles';
import { Logo } from 'components/Logo';
import { StatusBar } from 'components/StatusBar';
import { NavBar } from 'components/NavBar';
import { AppRoutes } from './AppRoutes';

export const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <AuthProvider>
        <Link to={`/`}> <Logo /> </Link>
        <StatusBar />
        <AppRoutes />
        <NavBar />
      </AuthProvider>
    </React.StrictMode>
  )
}
