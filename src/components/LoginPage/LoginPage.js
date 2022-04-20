import '../HomePage/Homepage.css'; 
import { Navigation } from "../Navigation/Navigation";
import { Login } from './Login';

 export const LoginPage = () => {

    return <div className='loginPage'>
        <Navigation />
        <div className='display-flex'>
        <Login />
        </div>
    </div>
}