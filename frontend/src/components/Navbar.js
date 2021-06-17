import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__logo">
                <Link to="/" className="navbar__links">
                    <h2>Iris Project</h2>
                </Link>
            </div>

            {/* Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/signals" className="cart__link">
                        Güncel Veri
                    </Link>
                </li>
                <li>
                    <Link to="/new" className="cart__link">
                        {/* Icon */}
                        Yeni Veri
                    </Link>
                </li>
            </ul>

            {/*  */}
        </nav>
    );
};

export default Navbar;
