import './Homepage.css';
import { Navigation } from "../Navigation/Navigation";
import { SideBar } from './Sidebar';
import { MainContent } from './MainContent';


 export const HomePage = () => {
    
    return <div className='homePage'>
        <Navigation />
        <div className='display-flex'>
        <SideBar />
        <MainContent/>
        </div>
    </div>
}