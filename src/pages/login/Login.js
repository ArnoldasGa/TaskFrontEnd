import React from 'react';
import './css/login.css';
import { useNavigate  } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }

    const login = () => {

        navigate('/main')
    }

    return (
        <div>
            <div className='login'>
                <form>
                    <div className='input'>
                        <label htmlFor="user">Username: </label>
                        <input type="text" id="user" name="user"></input><br></br>
                    </div>
                    <div className='input'>
                        <label htmlFor="passwordInput">Password:</label>
                        <input type="password" id="passwordInput" name="passwordInput"></input>
                    </div>
                </form>
                <button className='registerButton'>Login</button>
                <button className='registerButton' onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Login;