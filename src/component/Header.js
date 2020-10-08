import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <React.Fragment>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link class="navbar-brand" to="/">@viNash</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Details">Details</Link></li>
                            <li><Link to="/List">List</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}

export default Header;