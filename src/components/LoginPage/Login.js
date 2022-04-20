import './Login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { loginService } from '../../utils/AuthFunctions';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const { setInitialAuth  } = useAuth();
    const [loginData, setLoginData] = useState({
        email:'',
        password: ''
    });

    const loginInputHandler = (e) => {
        setLoginData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const loginHandler = async () => {
        const respData = await loginService(loginData.email, loginData.password)
        if(respData){
            setInitialAuth({isLoggedIn: true,
                token: respData.data.encodedToken});
            localStorage.setItem('token', respData.data.encodedToken)
            localStorage.setItem('isLoggedIn', true)
            navigate('/homePage') 
        } else{
            console.log('respData')
        }
          
    }
    const guestLoginHandler = async () => {
        const respData = await loginService('adarshbalika@gmail.com','adarshBalika123')

        if(respData){
            setInitialAuth({isLoggedIn: true,
                token: respData.data.encodedToken});
            localStorage.setItem('token', respData.data.encodedToken)
            localStorage.setItem('isLoggedIn', true)
            navigate('/homePage')
        }
        
    }
    return  <div className="container">
                <form id="form" className="form">
                    <h3 className="heading-3 txt-align-cntr">Login</h3>
                     <div className="form-control p-1">
                         <label htmlFor="email" className="heading-4">Email</label>
                        <input type="text" name="email" placeholder="Enter email"  required onChange={(e) => loginInputHandler(e)}/>
                     </div>

                <div className="form-control p-1">
                 <label htmlFor="password" className="heading-4">Password</label>
                 <input type="password" name="password" placeholder="Enter password" required onChange={(e) => loginInputHandler(e)}/>
                </div>

                <div className="form-checkbox display-flex p-1">
                 <input type="checkbox" id="remember-me" name="remember-me"/>
                 <label htmlFor="remember-me" className="heading-4 m-l-1">Remember Me</label>
                </div>
                     <button type="button" className="btn btn-solid-primary" onClick={loginHandler}>Login</button>
                     <button type="button" className="btn btn-solid-secondary" onClick={guestLoginHandler}>Login as Guest</button>
                <div className="form-link p-1 display-flex">
                     <Link to='/signup' className="new-accnt-link heading-4">
                Create New Account
                <i className="fa-solid fa-angle-right font-size-2pt6"></i>
            </Link>
         </div>
                </form>
         </div>
    

}

export {Login}