import React from 'react'
import { Link } from 'react-router-dom'

const Wrestler = ({ wrestler }) => {
    return (
        <section>
            <img src={wrestler.image} alt='wrestler' />

            <Link to={`/wrestlers/${wrestler.id}`}>
                <h1>{wrestler.name}</h1>
            </Link>
        </section>
    )
}

export default Wrestler;