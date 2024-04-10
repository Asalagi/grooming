import { useState } from 'react';
import './styling.css';
import pawLogo from './pawlogo.png';

function Main() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="main">
            <div className="logo-container">
                <img src={pawLogo} alt="logo" className="paw-logo" />
            </div>            
            <div className="menu-container">
            <div className={`menu-toggle ${open ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="menu-text">☰ Menu</div>
                <nav className={`menu ${open ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#"><button className="link-btn">Link One</button></a></li>
                        <li><a href="#"><button className="link-btn">Link Two</button></a></li>
                        <li><a href="#"><button className="link-btn">Link Three</button></a></li>
                        <li><a href="#"><button className="link-btn">Link Four</button></a></li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
    );
};

export default Main;