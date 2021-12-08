import React, { useState, } from 'react'
import './Navbar.css'

function Navbar() {
    interface Active {
        active: string;
    }
    const [active, setActive] = useState<Active>({active: ''})


    return (
        <div className="sidebar">
            <a className="home" href="#">Home</a>
            <a className="projects" href="#">Projects</a>
        </div>
    )
}

export default Navbar