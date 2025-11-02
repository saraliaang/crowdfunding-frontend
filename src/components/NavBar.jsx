import { Link, Outlet } from "react-router-dom";
import { useAuth } from '../hooks/use-auth.js';
import Logo from "./Logo";
import './NavBar.css';
import { useState } from "react";

function NavBar() {
    const { auth, setAuth } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user_id');
        setAuth({ token: null });
        setMenuOpen(false);

    }
    return (
        <div>
            <header className="nav">
                <div className="nav-left">
                    <Logo size={220} />
                </div>
                {!menuOpen ? (
                    <button
                        className="nav-panel-btn"
                        onClick={() => setMenuOpen(true)}
                    >
                        {/* <span className="nav-panel-icon">👤</span> */}
                        MENU
                    </button>
                ) : (
                    <button
                        className="nav-close-btn"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        ✕
                    </button>
                )}

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li >
                        <Link to="/" >_Home</Link>
                    </li>
                    {auth.token ? (
                        <li><Link to='/' onClick={handleLogout}>Logout</Link></li>
                    ) : (
                        <>
                            <li><Link to='/login'>_Login</Link></li>
                            <li><Link to='/signup'>_Signup</Link></li>
                        </>
                    )}
                    <li><Link to='/createfundraiser'>_Create a fundraising</Link></li>
                </ul>
            </header>
            <Outlet />
        </div>
    );
}

export default NavBar;


/*how to setMenuClosed afte every Link*/