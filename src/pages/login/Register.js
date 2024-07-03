import './css/register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        userName: ''
    });
    const [errors, setErrors] = useState({});
    
    const handelRegister  = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            const response = await fetch('http://localhost:8081/api/profile/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            
            if (response.ok) {
              alert('Registration successful!');
              navigate('/login')
            } else {
                let errorData;
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    errorData = await response.json();
                  } else {
                    errorData = await response.text();
                    if (errorData === 'Email already in use') {
                        errorData = { email: errorData };
                      } else if (errorData === 'Username already in use') {
                        errorData = { userName: errorData };
                      } else {
                        errorData = { general: errorData };
                      }
                  }
                  if (response.status === 400) {
                    setErrors(errorData);
                  } else {
                    alert('Registration failed: ' + JSON.stringify(errorData));
                  }
            }
            } catch (error) {
              console.error('Error:', error);
              alert('Registration failed1: ' + error.message);
            }
          };

    return (
        <div>
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <div className="inputRegister">
                        {errors.userName && <span className="error">{errors.userName}</span>}
                        <label for='userName'>Username: </label>
                        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handelRegister}></input>
                    </div>
                    <div className="inputRegister">
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                        <label for='firstName'>First Name: </label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handelRegister}></input>
                    </div>
                    <div className="inputRegister">
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                        <label for='lastName'>Last Name: </label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handelRegister}></input>
                    </div>
                    <div className="inputRegister">
                        {errors.password && <span className="error">{errors.password}</span>} 
                        <label for='password'>Password: </label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handelRegister}></input>
                    </div>
                    <div className="inputRegister">
                        {errors.email && <span className="error">{errors.email}</span>}
                        <label for='email'>Email: </label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handelRegister}></input>
                    </div>
                    <button type="submit" className='registerButton'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;