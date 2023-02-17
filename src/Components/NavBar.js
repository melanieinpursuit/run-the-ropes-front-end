import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to='/wrestlers'>
                    <p>All Wrestlers</p>
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/wrestlers/new'>
                        <p>Add Wrestler</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;