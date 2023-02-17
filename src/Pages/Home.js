import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Link to='/wrestlers'>
                <h1>Ready to run those ropes?</h1>
            </Link>
        </div>
    )
}

export default Home;