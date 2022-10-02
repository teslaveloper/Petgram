import React, { useState } from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { useLocation } from 'react-router-dom'

const SIZE = "32px";

export const NavBar = () => {
  const location = useLocation();

  const getActiveClass = (section) => {
    const { pathname } = location;

    if(pathname !== '/' && section !== '/' && pathname.indexOf(section) > -1 ) return 'is-active'
    if(pathname !== '/' && section === '/' && pathname.indexOf('/category') > -1) return 'is-active'
    if(pathname === '/' && section === pathname ) return 'is-active'

    return '';
  }

  return (
      <Nav>
        <Link to='/' className={` ${getActiveClass('/')}`} ><MdHome size={SIZE} /></Link>
        <Link to='/favorites' className={` ${getActiveClass('/favorites')}`}><MdFavoriteBorder size={SIZE} /></Link>
        <Link to='/user' className={` ${getActiveClass('/user')}`}><MdPersonOutline size={SIZE} /></Link>
      </Nav>
  );
}
