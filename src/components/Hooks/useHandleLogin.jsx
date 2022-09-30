import { useState } from 'react';
import { useStorage } from 'components/Hooks/useStorage';

export function useHandleLogin (){
  const [user, setUser] = useStorage('pgud-stauth', null)

  const handleLogin = (values) => {
    setUser({
      id: '1',
      ...values,
      permissions: ['analyzer'],
      roles: ['admin']
    });
  }

  const handleLogout = () => setUser(null);

  return [user, handleLogin, handleLogout];
}
