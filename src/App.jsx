import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { GlobalStyles } from 'components/styles/GlobalStyles';
import { Logo } from 'components/Logo';
import { NavBar } from 'components/NavBar';
import { Home } from 'components/pages/Home';
import { Detail } from 'components/pages/Detail';

export const App = () => {
  // const urlParamas = new window.URLSearchParams(window.location.search);
  // const detailId = urlParamas.get('id ');

  return (
    <BrowserRouter>
      <GlobalStyles />

      <Link to={`/`}> <Logo /> </Link>
      <Routes>
        <Route exact path="/category/:id" element={<Home />}/>
        <Route exact path="/photo/:id" element={ <Detail />} />
        <Route exact path="/" element={<Home />}/>
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
        }/>
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
