import React, { useContext } from 'react';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom';

import { AuthContext } from './AuthProviderManager';

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

import { useHandleLogin } from 'components/Hooks/useHandleLogin';
import { useLocation } from 'react-router-dom'

export const App = () => {
  // const urlParamas = new window.URLSearchParams(window.location.search);
  // const detailId = urlParamas.get('id ');
  // const contextValue = { user: user, login: handleLogin, logout: handleLogout }
  // const location = useLocation();
  // const isIndex = location.pathname === '/';

  // console.log(location.pathname);
  const { userToken } = useContext(AuthContext);

  console.log('app user', userToken);
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Link to={`/`}> <Logo /> </Link>
      <StatusBar />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route exact path="/category/:id" element={<Home />}/>
        <Route exact path="/photo/:id" element={ <Detail />} />

        <Route element={ <ProtectedRoute redirectPath="/" isAllowed={!userToken} />}>
            <Route path="login" element={<Login />} />
            <Route path="not_registered" element={<NotRegistered />} />
        </Route>

        <Route exact path="/analytics" element={
          <ProtectedRoute redirectPath="/"
            isAllowed={
              !!userToken //&& user.permissions.includes('analyzer')
            }
          >
            <Analytics />
          </ProtectedRoute>
        } />

        <Route element={<ProtectedRoute isAllowed={!!userToken} />}>
          <Route path="favorites" element={<Favs />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="*" element={<NotFound />}/>
      </Routes>
      <NavBar />
    </React.StrictMode>
  )
}
