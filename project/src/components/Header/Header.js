import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <header>
        <div class="masthead clearfix">
            <div class="inner">
                <h3 class="masthead-brand"><a class="nav-link homelink"><Link to="/" style={{ textDecoration: 'none' }}>Concert Room Lookup</Link></a></h3>
                <nav class="nav nav-masthead">
                    <a class="nav-link" ><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></a>
                    <a class="nav-link"><Link to="/list" style={{ textDecoration: 'none' }}>List</Link></a>
                    <a class="nav-link"><Link to="/add" style={{ textDecoration: 'none' }}>Add</Link></a>
                </nav>
            </div>
        </div>
    </header>
)

export default Header;