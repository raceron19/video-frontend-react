import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import gravatar from '../utils/gravatar'
import PropTypes from 'prop-types'
import { logoutRequest } from "../actions";
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import profile from '../assets/static/user-icon.png';

const Header = props => {
    const { user, isAuth } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    const headerClass = classNames('header', {
        isAuth
    })
    return (
        <header className={headerClass}>
            <Link to="/">
                <img
                    className="header__img"
                    src={logo}
                    alt="page logo"
                />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ?
                            <img
                                src={gravatar(user.email)}
                                alt={user.email}
                            />
                            :
                            <img
                                src={profile}
                                alt="user photo"
                            />
                    }


                    <p>Profile</p>
                </div>
                <ul>
                    {
                        hasUser ?
                            <li><a href="/">{user.name}</a></li>
                            :
                            null
                    }

                    {
                        hasUser ?
                            <li><a href="#" onClick={handleLogout}>Logout</a></li>
                            :
                            <li>
                                <Link to="/login">
                                    Login
                                 </Link>
                            </li>
                    }
                </ul>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

Header.propTypes = {
    user: PropTypes.object,
    isAuth: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);