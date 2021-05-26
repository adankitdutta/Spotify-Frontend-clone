import React, { useEffect } from 'react';
import './Login.css';
import {loginUrl} from './spotify';


function Login() {

    return (
        <div className="login">
            <img 
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png"
                alt="spotify-logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;