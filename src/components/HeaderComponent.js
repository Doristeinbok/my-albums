import React from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent() {

    return (
        <div className="header"> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link class="navbar-brand" to="/">
                    <img src="images/logo.jpg" width="30" height="30" alt="" />
                </Link>
                <Link className="navbar-brand" to="/personal">My albums collection</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>  
        </div>

    )
}

export default HeaderComponent;