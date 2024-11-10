"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Cakes Galore</div>

            {/* Toggleable Nav Links */}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;
