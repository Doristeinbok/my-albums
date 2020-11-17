import React from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent() {

    return (
        <div className="header"> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link class="navbar-brand" to="/">
                    <img src="images/logo.jpg" width="50px" height="auto" alt="logo" />
                </Link>
                <Link className="navbar-brand ml-4" to="/personal">My albums collection</Link>
                <Link className="navbar-brand ml-4" to="/register">Register</Link>
                <Link className="navbar-brand ml-4" to="/login">Sign-in</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>  
        </div>

    )
}

export default HeaderComponent;