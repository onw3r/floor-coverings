import React from 'react';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';
function Main() {
    return (
        <header>
            <nav className='nav-bar'>
                <ul className='nav-container'>
                    <li>
                        <Link className='nav-link' to={'/'}>Floor coverings</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/catalog'}>Каталог</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Main;