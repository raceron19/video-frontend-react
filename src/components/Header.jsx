import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import profile from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img
                className="header__img"
                src={logo}
                alt="page logo"
            />
        </Link>
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
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;