import React from 'react';
import LogoTitle from "./LogoTitle";
import InputIcon from '../Images/Input-Icons.png'
function FormContent() {
    return (
        <div className="form-content">

            {/* Login Form */}
            <div>

            </div>
            <div className="login-form">
                {/* Logo and Title */}
                <LogoTitle/>
                <div className="title">Nice to see you again</div>
                <form action="#">
                    <div className="input-boxes">
                        <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Login" required/>
                        </div>
                        <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Enter your password" required/>
                            <img src={InputIcon}></img>

                        </div>
                        <div className="button input-box">
                            <input type="submit" value="Sumbit"/>
                        </div>
                        {/*<div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup*/}
                        {/*    now</label>*/}
                        {/*</div>*/}
                        <div className="text sign-up-text">Don't have an account? <label >Sigup now</label>
                        </div>
                    </div>
                </form>
            </div>

            {/* Signup Form */}
            {/*<div className="signup-form">*/}
            {/*    /!* Logo and Title *!/*/}
            {/*    <LogoTitle/>*/}
            {/*    <div className="title">Nice to see you again</div>*/}
            {/*    <form action="#">*/}
            {/*        <div className="input-boxes">*/}
            {/*            <div className="input-box">*/}
            {/*                <i className="fas fa-user"></i>*/}
            {/*                <input type="text" placeholder="Enter your name" required/>*/}
            {/*            </div>*/}
            {/*            <div className="input-box">*/}
            {/*                <i className="fas fa-envelope"></i>*/}
            {/*                <input type="text" placeholder="Enter your email" required/>*/}
            {/*            </div>*/}
            {/*            <div className="input-box">*/}
            {/*                <i className="fas fa-lock"></i>*/}
            {/*                <input type="password" placeholder="Enter your password" required/>*/}
            {/*            </div>*/}
            {/*            <div className="button input-box">*/}
            {/*                <input type="submit" value="Sumbit"/>*/}
            {/*            </div>*/}
            {/*            <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login*/}
            {/*                now</label>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
}

export default FormContent;
