import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import HeaderNav from '../header-nav/HeaderNav';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='softpro_uz_nav'>
        <div className="softpro_uz__navbar-header">
          <HeaderNav/>
        </div>
        <div className="softpro_uz__navbar">
      <div className="softpro_uz__navbar-links">
        <div className="softpro_uz__navbar-links_logo">
            <img src='/assets/images/logo.png' alt='kasaba-logo'/>
        </div>
      </div>
      <div className="softpro_uz__navbar-links_container">
        <p><a href="#">Федерация</a></p>
        <p><a href="#">Расмий хужжатлар</a></p>
        <p><a href="#">Аъзо ташкилотлар</a></p>
        <p><a href="#">Интерактив хизматлар</a></p>
        <p><a href="#">Фаолият</a></p>
        <p><a href="#">Боғланиш</a></p>
      </div>
      <div className="softpro_uz__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="softpro_uz__navbar-menu_container scale-up-center">
          <div className="softpro_uz__navbar-menu_container-links">
            <p><a href="#">Федерация</a></p>
            <p><a href="#">Расмий хужжатлар</a></p>
            <p><a href="#">Аъзо ташкилотлар</a></p>
            <p><a href="#">Интерактив хизматлар</a></p>
            <p><a href="#">Фаолият</a></p>
            <p><a href="#">Боғланиш</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
