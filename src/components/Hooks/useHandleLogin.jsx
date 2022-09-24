import { useState } from 'react';
import { useStorage } from 'components/Hooks/useStorage';

export function useHandleLogin (){
  const [user, setUser] = useStorage('PGK-Auth', null)

  const handleLogin = () => {
    setUser({
      id: '1',
      name: 'robin',
      permissions: ['analyzer'],
      roles: ['admin'],
    });

    console.log('seteando login', user);
  }

  const handleLogout = () => setUser(null);

  return [user, handleLogin, handleLogout];
}
