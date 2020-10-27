import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Login.scss'

const Register = () => (
    <section className="login">
        <div className="login__container">
            <h2>Sign up</h2>
            <form className="login__container--form" action="">
                <input className="input-register" placeholder="Name" type="text" name="" id="" />
                <input className="input-register" placeholder="Email" type="text" name="" id="" />
                <input className="input-register" placeholder="Password" type="password" name="" id="" />
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
);

export default Register;
