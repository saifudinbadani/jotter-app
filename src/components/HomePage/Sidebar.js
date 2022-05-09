import './Homepage.css';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  
    const userName = localStorage.getItem('userName') ? localStorage.getItem('userName'): 'User'
    
    return <aside className='side-wrapper display-flex'>
        <NavLink to='/homePage' className={({ isActive}) => isActive ? 'btn-sideWrapper  btn btn-sideWrapper-selected': 'btn-sideWrapper  btn'}>
            <i className="icon-sideWrapper fas fa-home-alt"></i>
            Home</NavLink>
        <button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-tag"></i>
            Labels</button>
            <NavLink to='/archive' className={({ isActive}) => isActive ? 'btn-sideWrapper  btn btn-sideWrapper-selected': 'btn-sideWrapper  btn'}>
            <i className="icon-sideWrapper fas fa-archive"></i>
            Archive</NavLink>

        <button className='btn-sideWrapper  btn'>
            <i className="icon-sideWrapper fas fa-user-circle"></i>
           {userName}</button>
    </aside>
}

