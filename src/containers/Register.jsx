import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import '../assets/styles/components/Login.scss'
import Header from '../components/Header';

const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return (
        <>
            <Header isAuth />
            <section className="login">
                <div className="login__container">
                    <h2>Sign up</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input
                            className="input-register"
                            placeholder="Name"
                            type="text"
                            name="name"
                            onChange={handleInput}
                        />
                        <input
                            className="input-register"
                            placeholder="Email"
                            type="text"
                            name="email"
                            onChange={handleInput}
                        />
                        <input
                            className="input-register"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={handleInput}
                        />
                        <button className="button" type="submit">Sign Up</button>
                    </form>
                    <p className="login__container--register">
                        Already a user?
                    <Link to="/login">
                            Sign In
                    </Link>
                    </p>
                </div>
            </section>
        </>
    );
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);
