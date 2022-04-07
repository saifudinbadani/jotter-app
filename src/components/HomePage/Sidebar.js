import './Homepage.css';
import { Link } from 'react-router-dom';


export const SideBar = () => {
    return <aside className='side-wrapper display-flex'>
        <Link to='/homePage'><button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-home-alt"></i>
            Home</button></Link>
        <button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-tag"></i>
            Labels</button>
        <Link to='/archive'><button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-archive"></i>
            Archive</button></Link>
        <button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-trash"></i>
            Trash</button>
        <button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-user-circle"></i>
            Profile</button>
    </aside>
}