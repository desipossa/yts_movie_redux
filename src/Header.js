import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ genre }) => {
    return (
        <div>
            <ul className='ListDefault'>
                {
                    genre.map((it, idx) => {
                        return (
                            <li><Link to={`/main/${it}`}>{it}</Link></li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Header