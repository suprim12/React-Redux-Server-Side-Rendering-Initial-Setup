import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const SiteHeader = () => {
    return (
        <header className="site-header">
            <nav className="site-nav">
                <div className="wrapper">
                    <Link to="/" className="site-logo">Brand Name</Link>
                    <ul className="site-nav--lists">
                        <li>
                            <NavLink exact to="/academic">Academic Tests</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/general">General Tests</NavLink>
                        </li>
                    </ul>
                    <button type="button" className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default SiteHeader
