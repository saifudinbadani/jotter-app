import '../HomePage/Homepage.css'; 
import { Navigation } from "../Navigation/Navigation";
import { SignUp } from './SignUp';

 export const SignUpPage = () => {

    return <div className='signUpPage'>
        <Navigation />
        <div className='display-flex'>
        <SignUp />
        </div>
    </div>
}