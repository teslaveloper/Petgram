import React, { useState } from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

const SIZE = "32px";

export const NavBar = () => {
  const [section, setSection] = useState('home')

  return (
      <Nav>
        <Link to='/' className={`${section === 'home' ? 'is-active' : '' }`} onClick={() => setSection('home')}><MdHome size={SIZE} /></Link>
        <Link to='/favorites' className={`${section === 'favs' ? 'is-active' : ''}`} onClick={() => setSection('favs')}><MdFavoriteBorder size={SIZE} /></Link>
        <Link to='/user' className={`${section === 'user' ? 'is-active' : '' }`} onClick={() => setSection('user')}><MdPersonOutline size={SIZE} /></Link>
      </Nav>
  )
}
