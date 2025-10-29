import {useState} from 'react';
import postSignup  from '../api/post-signup';
import { useNavigate } from 'react-router-dom';

function SignupForm(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:"",
        password:"",
        email:''
    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }))
    }

    const handleSubmit = (event) =>  {
        event.preventDefault();
        if(user.username && user.password && user.email){
            postSignup(user.username, user.password)
            .then((response) => {
                window.localStorage.setItem('token', response.token);
                navigate('/');
            });
        }
    }

    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' placeholder='Enter username' onChange ={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type="password" id='password' placeholder="Password" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type="email" id='email' placeholder="Email" onChange={handleChange}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Signup</button>
        </form>
    )
}

export default SignupForm;