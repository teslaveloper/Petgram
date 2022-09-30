import React, { useContext, useEffect } from 'react';
import { UserForm } from 'components/UserForm'
import { AuthContext } from '../../AuthProviderManager';
import { useMutationSignUp } from 'components/Hooks/useMutationSignUp';

export const NotRegistered = () => {
  const { storeToken } = useContext(AuthContext);
  const { sigupUser, data, loading, error, reset } = useMutationSignUp(false);

  useEffect(() =>{
    if ( data && data?.signup ) {
      console.log('useeffec si hay data', data);
      const token = data.signup
      storeToken(token)
    }
  }, [data?.signup]);

  const handleSignUp = (values) => {
    console.log('values', values);
    sigupUser({variables: { input: {
        email: values.email,
        password: values.password
      }}
    })
  }

  const handleReset = () => {
    reset();
  }

  // if (error) {
  //   return (<div>
  //     <span>Submission error! ${error.message}</span>
  //     <input type='button' onClick={reset} value="Dismiss" />
  //   </div>)
  // }
  return (
    <UserForm
      isNew={true}
      handelCallBack={handleSignUp}
      submitName='Sign Up'
      error={error}
      loading={loading}
      reset={handleReset}
    />
  )
}
