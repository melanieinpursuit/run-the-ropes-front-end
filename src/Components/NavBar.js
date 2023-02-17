import React from 'react'
import { Link } from 'react-router-dom'
import header from '../images/runtheropesagain.png'
import button from '../images/addawrestler.png'
import '../CSS/NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div className='header'>
                <Link to='/wrestlers'>
                    <img className='header' src={header} alt='header' />
                </Link>
            </div>
            <ul className='newnav'>
                <li>
                    <Link to='/wrestlers/new'>
                        <img className='button' src={button} alt='button' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;