import '../LoginPage/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signUpService } from '../../utils/AuthFunctions';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../../utils/FormValidation';

export const SignUp = () => {
    const navigate = useNavigate();
    const initialState = { firstName: '', email: '', passwordOne: '', passwordTwo:''}    
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }
    
    const handleFormSubmit = async(e) => {
        e.preventDefault();
       setFormErrors(validateForm(formValues)) 
       
       if(validateForm(formValues) === false){
        const response = await signUpService(formValues.email, formValues.passwordOne, formValues.firstName);
        
        if(response.errors){
            setFormErrors(response.errors)
            return;
        }
        localStorage.setItem('token', response.data.encodedToken)
        localStorage.setItem('isLoggedIn', true)
        navigate('/login')
       }  
    }

   
    return <div className='container'>
         <form id="form" className="form" onSubmit={handleFormSubmit}>
             <h3 className="heading-3 txt-align-cntr">Signup</h3>
            <div className="form-control p-1">
                <label htmlFor="firstName" className="heading-4">Username</label>
                <input type="text" name='firstName' placeholder="Enter username"  value={formValues.firstName} onChange={handleFormChange}/>
                <small className='err'>{formErrors.username}</small>
            </div>

            <div className="form-control p-1">
                <label htmlFor="email" className="heading-4">Email</label>
                <input  type="text" name='email'  placeholder="Enter email"  value={formValues.email} onChange={handleFormChange}/>
                <small className='err'>{formErrors.email}</small>
               
            </div>

            <div className="form-control p-1">
                <label htmlFor="password" className="heading-4">Password</label>
                <input type="password" name='passwordOne' placeholder="Enter password"   value={formValues.passwordOne} onChange={handleFormChange}/>
                <small className='err'>{formErrors.passwordOne}</small>
            </div>

            <div className="form-control p-1">
                <label htmlFor="password" className="heading-4">Re-enter Password</label>
                <input type="password"  name='passwordTwo' placeholder="Re-enter password"  value={formValues.passwordTwo} onChange={handleFormChange}/>
                <small className='err'>{formErrors.passwordTwo}</small>
            </div>

            <div className="form-checkbox display-flex p-1">
                <input type="checkbox"  name="terms-conditions" />
                <label htmlFor="terms-conditions" className="heading-4 m-l-1">I accept all Terms & Conditions</label>
            </div>
            <button type="submit" className="btn btn-solid-primary" >Create New Account</button>
            <div className="form-link p-1 display-flex">
                <Link to='/login' className="new-accnt-link heading-4">
                    Already have an account
                    <i className="fa-solid fa-angle-right font-size-2pt6"></i>
                </Link>
            </div>
        </form>
    </div>
}