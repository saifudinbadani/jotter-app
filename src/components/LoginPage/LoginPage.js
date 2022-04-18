import '../HomePage/Homepage.css'; 
import { Navigation } from "../Navigation/Navigation";
import { SideBar } from '../HomePage/Sidebar';
import { Login } from './Login';

 export const LoginPage = () => {

    return <div className='archivePage'>
        <Navigation />
        <div className='display-flex'>
        <SideBar />
        <Login />
        </div>
    </div>
}