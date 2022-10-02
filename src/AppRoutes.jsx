import React, { useContext, Suspense} from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import { AuthContext } from './AuthProviderManager';

import { ProtectedRoute } from 'components/ProtectedRoute';
// import { Home } from 'components/pages/Home';
// import { Detail } from 'components/pages/Detail';
// import { Favs } from 'components/pages/Favs';
// import { User } from 'components/pages/User';
// import { NotRegistered } from 'components/pages/NotRegistered';
// import { NotFound } from 'components/pages/NotFound';
// import { Analytics } from 'components/pages/Analytics';
// import { Login } from 'components/pages/Login';
import { HelmetProvider } from 'react-helmet-async';
const Favs = React.lazy(() => import('components/pages/Favs'));
const Home = React.lazy(() => import('components/pages/Home'));
const Detail = React.lazy(() => import('components/pages/Detail'));
const User = React.lazy(() => import('components/pages/User'));
const NotRegistered = React.lazy(() => import('components/pages/NotRegistered'));
const NotFound = React.lazy(() => import('components/pages/NotFound'));
const Analytics = React.lazy(() => import('components/pages/Analytics'));
const Login = React.lazy(() => import('components/pages/Login'));

export const AppRoutes = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <HelmetProvider>
      <Suspense fallback={<div />}>
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
      </Suspense>
    </HelmetProvider>
  );
}