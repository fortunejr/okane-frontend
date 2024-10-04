import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { jwtDecode } from 'jwt-decode';
import api from '../api';  // Assuming you're using axios or similar to make API requests
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';  // Constants for token keys
import "../styles/Nav.css"

const Nav = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Run authentication check when component mounts
        checkAuthStatus();
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (!refreshToken) {
            setIsAuthenticated(false);
            return;
        }

        try {
            const res = await api.post('/api/token/refresh/', {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                // Store new access token
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error(error);
            setIsAuthenticated(false);
        }
    };

    const checkAuthStatus = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;

            if (tokenExpiration < now) {
                // Token expired, try refreshing it
                await refreshToken();
            } else {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            setIsAuthenticated(false);
        }
    };

    // Close menu after link click
    const closeMenu = () => setOpen(false);

    return (
        <nav className="Nav">
            
            <div className='name'>
                <Link to="/">Okane</Link>
            </div>
            <div className="hamburger-menu">    
                <Hamburger 
                    className="hamburger-menu"
                    size={24}
                    toggled={open}
                    toggle={setOpen}
                />
            </div>

            {/* Always visible links */}
            {open && (
                <div className='nav-ul'>
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="#" onClick={closeMenu}>Contact Us</Link></li>
                        <li><Link to="#" onClick={closeMenu}>About</Link></li>

                        {/* Conditional rendering based on authentication */}
                        {isAuthenticated === null ? (
                            <li>Loading...</li>
                        ) : !isAuthenticated ? (
                            <>
                                <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
                                <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/investments" onClick={closeMenu}>Investments</Link></li>
                                <li><Link to="/logout" onClick={closeMenu}>Logout</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
