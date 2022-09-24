import React, { useContext } from 'react';
import AuthUserContext from '../../AuthUserContext';

export const Analytics = () => {
  const { user, logout } = useContext(AuthUserContext)

	console.log('user', user);
	return (
		<>
			<h1>Analytics</h1>
			<button onClick={() => logout()} >
				Try Login->
			</button>
		</>
	)
}
