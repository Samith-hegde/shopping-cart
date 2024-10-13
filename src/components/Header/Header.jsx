import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>Angadi</h1>
            <section>
                <Link to="/"><button> Home </button></Link>
                <Link to="/shop"><button> Shop </button></Link>
                <Link to="/cart"><button> Cart </button></Link>
            </section>
        </header>
    );
}

export default Header;