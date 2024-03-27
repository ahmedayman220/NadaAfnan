import React from 'react';
import Logo from '../Images/logo.png';

function LogoTitle() {
    return (
        <div className="logo-title">
            <img src={Logo} alt="UI Unicorn Logo" />
            <h2>UI Unicorn</h2>
        </div>
    );
}

export default LogoTitle;
