import './css/register.css';
import { useNavigate  } from 'react-router-dom';

function Register() {
    
    const navigate = useNavigate();

    return (
        <div>
            <div className="register">
                <form>
                    <div className="inputRegister">
                        <label for='user'>Username: </label>
                        <input type="text" id="user" name="user"></input>
                    </div>
                    <div className="inputRegister">
                        <label for='fName'>First Name: </label>
                        <input type="text" id="fName" name="fName"></input>
                    </div>
                    <div className="inputRegister">
                        <label for='lName'>Last Name: </label>
                        <input type="text" id="lName" name="lName"></input>
                    </div>
                    <div className="inputRegister">
                        <label for='passwordInput'>Password: </label>
                        <input type="password" id="passwordInput" name="passwordInput"></input>
                    </div>
                    <div className="inputRegister">
                        <label for='emailInput'>Email: </label>
                        <input type="text" id="emailInput" name="emailInput"></input>
                    </div>
                </form>
                <button className='registerButton'>Register</button>
            </div>
        </div>
    )
}

export default Register;