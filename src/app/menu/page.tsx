"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import '../styles/menu.css'; // Import the corresponding CSS
import Navbar from '../components/Navbar'; // Import Navbar

const Menu = () => {
    // Sample menu items with images
    const menuItems = [
        {
            name: 'Vanila Cupcake',
            description: 'Rich and moist chocolate cake with a silky ganache topping.',
            price: '$20',
            image: '/cupcake1.jpg.webp', 
        },
        {
            name: 'Choclate Cupcake',
            description: 'Soft vanilla cupcakes with buttercream frosting.',
            price: '$15 per dozen',
            image: '/cupcake2.jpg.webp',
        },
        {
            name: 'Red Velvet Cupcake',
            description: 'Classic red velvet cake with cream cheese frosting.',
            price: '$25',
            image: '/cupcake3.jpeg',
        },
        {
            name: 'Strawberry cupcake',
            description: 'Zesty lemon tart with a buttery crust.',
            price: '$18',
            image: '/cupcake4.jpg.webp',
        },
    ];

    return (
        <div className="menu-container">
            <Navbar /> {/* Render Navbar here */}
            <h1>Our Menu</h1>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <Image
                            src={item.image}    
                            alt={item.name}        
                            width={500}            
                            height={300}            
                            className="menu-item-image"
                        />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <span className="price">{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
