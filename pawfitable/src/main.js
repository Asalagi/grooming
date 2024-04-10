import { useState } from 'react';
import './styling.css';

function Main() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className={`menu-toggle ${open ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="menu-text">☰ Menu</div>
            <nav className={`menu ${open ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Link One</a></li>
                    <li><a href="#">Link Two</a></li>
                    <li><a href="#">Link Three</a></li>
                    <li><a href="#">Link Four</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Main;