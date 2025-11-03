import { useState } from 'react';
import postSignup from '../api/post-signup';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';
import { useAuth } from '../hooks/use-auth.js';


function SignupForm() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser(prev => ({ ...prev, [id]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.username && user.password && user.email) {
            postSignup(user.username, user.password)
                .then((response) => {
                    window.localStorage.setItem('token', response.token);
                    setAuth({ token: response.token });
                    navigate('/');
                });
        }
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-title">Create Your Time Traveler ID</h2>

                <div className="auth-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='Enter username' onChange={handleChange} />
                </div>

                <div className="auth-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' placeholder="Password" onChange={handleChange} />
                </div>

                <div className="auth-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' placeholder="Email" onChange={handleChange} />
                </div>

                <button type="submit" className="auth-btn">Activate Account</button>
            </form>
        </div>
    )
}


export default SignupForm;