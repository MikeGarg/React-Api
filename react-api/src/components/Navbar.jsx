import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to={"/"}>Lista</Link></li>
                <li><Link to={"/crear"}>Crear</Link></li>
            </ul>
        </nav>
    )
}
