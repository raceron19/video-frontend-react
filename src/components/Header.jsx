import React from 'react'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import profile from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">
        <img
            className="header__img"
            src={logo}
            alt="page logo"
        />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img
                    src={profile}
                    alt="user photo"
                />
                <p>Profile</p>
            </div>
            <ul>
                <li><a href="/">Account</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
    </header>
);

export default Header;