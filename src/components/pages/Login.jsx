import React, { useContext } from 'react';
import { useHandleLogin } from 'components/Hooks/useHandleLogin';
import AuthUserContext from '../../AuthUserContext';

export const Login = () => {
  const { user, login, logout } = useContext(AuthUserContext)

	return (
		<div>
			<button onClick={() => login()} >
				Try Login-
			</button>
		</div>
	)
}