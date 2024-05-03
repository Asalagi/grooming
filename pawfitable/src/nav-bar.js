import './styling.css';
import { useState } from 'react';

function NavBar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const [isPromptOpen, setIsPromptOpen] = useState(false); // usestate sets if prompt is up on not

    const openPrompt = () => {
        setIsPromptOpen(true);
    }; // add function to open prompt

    const closePrompt = () => {
        setIsPromptOpen(false);
    }; // add function to close prompt

    const handleClicked = (e) => {
        if (e.target.id === 'id100') {
            closePrompt();
        } // add handler to have prompt open or close
    };

    return (
        <div className="div-section">
            <div className="main-menu">
                <button className="link-btn" onClick={openPrompt}>Log In</button>
                <button className="link-btn">Clients</button>
                <button className="link-btn">Link Four</button>
                <button className="link-btn">Link Five</button>
                <button className="link-btn">Link Six</button>
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
                                <li><a href="#"><button className="link-btn">Link Five</button></a></li>
                                <li><a href="#"><button className="link-btn">Link Six</button></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {isPromptOpen && (
                <div id="id100" className="prompt" onClick={handleClicked}>
                    <div className="prompt-content">
                        <div className="title">Log In</div>
                        <div className="input-container">
                            <label>UserName</label>
                            <input type="text" placeholder="UserName" name="user" required />
                            <label>Password</label>
                            <input type="password" placeholder="Password" name="pass" required />
                        </div>
                        <div className="btn-container">
                            <button className="login-btn">Log In</button>
                            <button className="cancel-btn" onClick={closePrompt}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar;