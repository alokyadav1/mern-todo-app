import React from 'react';
import {Outlet, NavLink } from 'react-router-dom';
import "./header.css"
function Header() {
    return (
        <div>
            <nav className='header bg-slate-200 flex justify-around items-center'>
                <div className="logo w-1/4 text-center">
                    <NavLink to="/">Todo App</NavLink>
                </div>
                <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </nav>
        <Outlet/>
        </div>
    );
}

export default Header;