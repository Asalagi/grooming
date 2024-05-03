import './styling.css';
import NavBar from './nav-bar';
import pawLogo from './pawlogo.png';
import Home from './home';

function TestIt(){
    return (
        <div className="main">
            <div className="logo-container">
                <img src={pawLogo} alt="logo" className="paw-logo" />
            </div>
            <div className="div-section">
                <NavBar />
            </div> 
            <div className="main-content">
                <Home />
            </div> 
        </div>
    )
}

export default TestIt;