import { useState } from 'react';
import pawlogo from './pawlogo.png';
import './login.css';

function LogIn() {
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
        <div>
            <button className="log-button" onClick={openPrompt} style={{ width: 'auto' }}>
                Login
            </button>

            {isPromptOpen && (
                <div id="id100" className="prompt" onClick={handleClicked}>
                    <div className="prompt-content">
                        <div className="img-container">
                            <span className="close" onClick={closePrompt}>
                                &times;
                            </span>
                            <img src={pawlogo} alt="img" className="img" />
                        </div>
                        <div className="log-container">
                            <label htmlFor="uname">
                                <b>Username</b>
                            </label>
                            <input type="text" placeholder="Username" name="uname" required />

                            <label htmlFor="password">
                                <b>Password</b>
                            </label>
                            <input type="password" placeholder="Password" name="pass" required />

                            <button className="log-button" type="submit">Login</button>
                            <label>
                                <input type="checkbox" defaultChecked name="remember" /> Remember me
                            </label>
                        </div>

                        <div className="log-container" style={{ backgroundColor: '#f1f1f1' }}>
                            <button className="log-button" type="button" onClick={closePrompt} className="cancel">
                                Cancel
                            </button>
                            <span className="pass">
                                Forgot <a href="#">password?</a>
                            </span>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default LogIn;