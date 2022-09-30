import React, { createContext } from 'react';
// import { useHandleLogin } from 'components/Hooks/useHandleLogin'
import { useStorage } from 'components/Hooks/useStorage';

const initialState = {
  userToken: '',
  storeToken: () => {},
  deleteToken: () => {}
};

// este se usa como hook
export const AuthContext = createContext(initialState);


// este va en las rutasa
export const AuthProvider = ({children}) => {
  // const [user, handleLogin, handleLogout] = useHandleLogin(null);
  const [token, setToken] = useStorage('pgus-tk', null)

  const value = {
    userToken: token,
    storeToken: setToken,
    deleteToken: () => setToken(null)
  };
  console.log('AuthProvider recover token', value);
  return  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
