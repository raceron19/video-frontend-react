import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
import Header from '../components/Header'

const Login = (props) => {
    const [form, setValues] = useState({
        email: '',
    });
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <>
            <Header isAuth />
            <section className="login">
                <div className="login__container">
                    <h2>Log In</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input
                            name="email"
                            className="input-register"
                            placeholder="Email"
                            type="text"
                            onChange={handleInput}
                        />
                        <input
                            name="password"
                            className="input-register"
                            placeholder="Password"
                            type="password"
                            onChange={handleInput}
                        />
                        <button className="button" type="submit">Log In</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" name="" id="cbx1" value="checkbox" />Remember me
                        </label>
                            <a href="/">Forgot my password</a>
                        </div>
                    </form>
                    <div className="login__container--social-media">
                        <div className=""><img src={googleIcon} alt="google icon" />Login with Google</div>
                        <div className=""><img src={twitterIcon} alt="twitter icon" />Login with Twitter</div>
                    </div>
                    <p className="login__container--register">
                        Don't have an account?
                    <Link to="/register">
                            Sign Up
                    </Link>
                    </p>
                </div>
            </section>
        </>
    );
}

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);

