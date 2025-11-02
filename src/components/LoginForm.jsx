import { useState } from 'react';
import postLogin from '../api/post-login';
import { useAuth } from '../hooks/use-auth.js';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'



function LoginForm(){
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const [credentials, setCredentials] = useState({
        username:"",
        password:"",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(credentials.username && credentials.password){
            postLogin(credentials.username, credentials.password)
            .then((response) => {
                window.localStorage.setItem('token', response.token);
                window.localStorage.setItem('user_id', response.user_id);
                setAuth({ token: response.token });
                navigate('/');
            });
        }
    };
    
    return(
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-title"> Login</h2>

                <div className="auth-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id='username' 
                        placeholder='Enter username' 
                        onChange={handleChange}
                    />
                </div>

                <div className="auth-group">
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password" 
                        id='password' 
                        placeholder="Password" 
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="auth-btn">Authorize</button>
            </form>
        </div>
    );
}

export default LoginForm;