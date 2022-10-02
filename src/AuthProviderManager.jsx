import React, { createContext } from 'react';
// import { useHandleLogin } from 'components/Hooks/useHandleLogin'
import { useStorage } from 'components/Hooks/useStorage';

const initialState = {
  userToken: '',
  storeToken: () => {},
  deleteToken: () => {}
};

// used as hook params
export const AuthContext = createContext(initialState);

// used on routes
export const AuthProvider = ({children}) => {
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
