import React, { useState, useContext } from 'react';
import { SBar } from './styles';
import { MdLogout } from 'react-icons/md';
import { Link} from 'react-router-dom';
import AuthUserContext from '../../AuthUserContext';

const SIZE = "22px";

export const StatusBar = () => {
  const { user, login, logout } = useContext(AuthUserContext)
  const ShowButton = user
    ? <>
      <span>
        <strong>Signed as</strong>: {user.name}
      </span>
      <button
        className='btn-logout'
        onClick={() => logout()}>
          <MdLogout size={SIZE} />
      </button>
     </>
    : <button
      className='btn-signin' 
      onClick={() => login()}> 
       Sign In
     </button>

  return (
    <SBar>
      {ShowButton}
    </SBar>
  )
}
