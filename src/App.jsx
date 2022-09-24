import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate, Outlet } from 'react-router-dom';

import { GlobalStyles } from 'components/styles/GlobalStyles';
import { Logo } from 'components/Logo';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { StatusBar } from 'components/StatusBar';
import { NavBar } from 'components/NavBar';
import { Home } from 'components/pages/Home';
import { Detail } from 'components/pages/Detail';
import { Favs } from 'components/pages/Favs';
import { User } from 'components/pages/User';
import { NotRegistered } from 'components/pages/NotRegistered';
import { NotFound } from 'components/pages/NotFound';
import { Analytics } from 'components/pages/Analytics';
import { Login } from 'components/pages/Login';
import AuthUserContext from './AuthUserContext';

import { useHandleLogin } from 'components/Hooks/useHandleLogin';

export const App = () => {
  // const urlParamas = new window.URLSearchParams(window.location.search);
  // const detailId = urlParamas.get('id ');
  const [user, handleLogin, handleLogout] = useHandleLogin();
  const contextValue = { user: user, login: handleLogin, logout: handleLogout }

  return (
    <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
        <AuthUserContext.Provider value={contextValue}>
          <Link to={`/`}> <Logo /> </Link>
          <StatusBar />
          <Routes>
            <Route index path="/" element={<Home />}/>
            <Route exact path="/category/:id" element={<Home />}/>
            <Route exact path="/photo/:id" element={ <Detail />} />
            <Route exact path="/not_registered" element={<NotRegistered />}/>

            <Route exact path="/login" element={
              <ProtectedRoute redirectPath="/" isAllowed={!user} >
                <Login />
              </ProtectedRoute>
            } />

            <Route exact path="/analytics" element={
              <ProtectedRoute redirectPath="/"
                isAllowed={
                  !!user && user.permissions.includes('analyzer')
                }
              >
                <Analytics />
              </ProtectedRoute>
            } />

            <Route element={<ProtectedRoute isAllowed={!!user} />}>
              <Route path="favorites" element={<Favs />} />
              <Route path="user" element={<User />} />
            </Route>

            <Route path="*" element={<NotFound />}/>
          </Routes>
          <NavBar />
        </AuthUserContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
