import { Link, Outlet } from "react-router-dom";
import { useAuth } from '../hooks/use-auth.js';

function NavBar() {
    const {auth, setAuth} = useAuth();
    const handleLogout = () => {
        window.localStorage.removeItem('token');
        setAuth({ token:null });
    }
    return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            { auth.token ? (
                <Link to='/' onClick={handleLogout}>
                    Logout
                </Link>
                ) : (
                <Link to='/login'>Login</Link>
            )}
            <Link to ='/signup'>Signup</Link> 
            <Link to ='/createfundraiser'>Create a fundraising</Link>
        </nav>
        <Outlet />
    </div>
    );
}

export default NavBar;