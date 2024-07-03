import React from 'react';
import './css/login.css';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const handelLogin  = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [errors, setErrors] = useState({});

    const register = () => {
        navigate('/register')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            const response = await fetch('http://localhost:8081/api/profile/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
        });
        console.log(response);
        if (response.ok) {
            let responseText = await response.text();
            localStorage.setItem("Token", responseText);
            navigate("/profile");
            window.location.reload();
        } else {
            let errorData;
            errorData = await response.text();
            errorData = { loginError: errorData };
            setErrors(errorData);
        }
        }catch (error) {
            console.error('Error:', error);
            alert('Registration failed1: ' + error.message);
        }
    }

    return (
        <div>
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <div className='inputLogin'>
                        {errors.loginError && <span className="error">{errors.loginError}</span>}
                        <label htmlFor="userName">Username: </label>
                        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handelLogin}></input>
                    </div>
                    <div className='inputLogin'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handelLogin}></input>
                    </div>
                    <div>
                    <button type='submit' className='registerButton'>Login</button>
                    <button className='registerButton' onClick={register}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;