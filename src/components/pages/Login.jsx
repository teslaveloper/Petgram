import React, { useContext, useEffect } from 'react';
import { UserForm } from 'components/UserForm'
import { AuthContext } from '../../AuthProviderManager';
import { useMutationSignIn } from 'components/Hooks/useMutationSignIn';

const Login = () => {
  const { storeToken } = useContext(AuthContext);
  const { signInUser, data, loading, error, reset } = useMutationSignIn();

  useEffect(() =>{
    if ( data && data?.login ) {
      console.log('useeffec si hay data', data);
      const token = data.login
      storeToken(token);
    }
  }, [data?.login]);

  const handleLogin = (values) => {
    console.log('values', values);
    signInUser({variables: { input: values } });
  };

  const handleReset = () => {
    reset();
  };

  return (
    <UserForm
      isNew={false}
      handelCallBack={handleLogin}
      submitName='Login'
      loading={loading}
      error={error}
      reset={handleReset}
    />
  )
};

export default Login;
