import '../HomePage/Homepage.css'; 
import { Navigation } from "../Navigation/Navigation";
import { Archive } from './Archive';
import { SideBar } from '../HomePage/Sidebar';

 export const ArchivePage = () => {

    return <div className='archivePage'>
        <Navigation />
        <div className='display-flex'>
        <SideBar />
        <Archive />
        </div>
    </div>
}