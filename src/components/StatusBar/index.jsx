import React, { useState, useContext } from 'react';
import {
  SDBar,
  SDBarButton,
  SdbarCloseButton
} from './styles';
import { MdLogout, MdCancel, MdMenu } from 'react-icons/md';
import { AuthContext } from '../../AuthProviderManager';
export const StatusBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userToken, deleteToken } = useContext(AuthContext);
  const handleLogout = () => {
    deleteToken(null);
    setSidebarOpen();
  }

  return (
    <>
      { userToken && !sidebarOpen &&
          <SDBarButton  >
            <span>
              <MdMenu
                onClick={() => setSidebarOpen(true)}
                size={'35px'}
              />
            </span>
          </SDBarButton>
      }
      {
        sidebarOpen &&
        <SDBar>
          <div className='SdbarContent'>
            <SdbarCloseButton onClick={() => setSidebarOpen(false)}>
              <MdCancel size={'30px'}/>
            </SdbarCloseButton>

            <div className='is-flex-column'>
              <li className='items'>{userToken}</li>
              {userToken &&
                <li className='items'>
                  <div
                    className='btn-logout is-flex align-items-center justify-content-center'
                    onClick={() => handleLogout()}>
                      <span>
                        Logout
                      </span>
                      <MdLogout size={'15px'}/>
                  </div>
                </li>
              }
            </div>
          </div>
        </SDBar>
      }
    </>
  )
}
