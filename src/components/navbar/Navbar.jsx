import React, { useState } from 'react';
import './Navbar.css';
import { HiHome } from 'react-icons/hi';
import { BsPeopleFill, BsChatText } from 'react-icons/bs';
import { RiFileList3Line } from 'react-icons/ri';
import logo from '../../assets/images.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const MenuItems = () => (
        <>
            <NavLink to='/' activeclassname='active-navItem' className="navItem" >
                Home <HiHome className='nav-icon' />
            </NavLink>
            <NavLink to='/profile' activeclassname='active-navItem' className="navItem">
                Profile <BsPeopleFill className='nav-icon' />
            </NavLink>
            <NavLink to='/articles' activeclassname='active-navItem' className="navItem">
                <img src={logo} alt="logo" /> 
            </NavLink>
            <NavLink to='/follow-list' activeclassname='active-navItem' className="navItem">
                Follow List <RiFileList3Line className='nav-icon' />
            </NavLink>
            <NavLink to='/chat' activeclassname='active-navItem' className="navItem">
                Chat <BsChatText className='nav-icon' />
            </NavLink>
        </>
    )

    return (
        <div className="navbar">
            <div className="navList">
                <MenuItems />
            </div>
        </div>
    )
}

export default Navbar