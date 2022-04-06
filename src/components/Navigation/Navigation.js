import './Navigation.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {

    return  <nav className="nav-container display-flex primary-clr p-rl-6">
    <h1 to='/' className="nav-link font-size-2pt6 heading-1">Jotter</h1>
    <div className="input-search pos-rltv m-rght-auto">
        <i className="fas fa-filter pos-absolute font-size-2pt6"></i>
        <input type="text" placeholder="search" className="nav-input-search"/>
    </div>
    {/* <Link to='/productlist' className="nav-link-cta">Shop Now</Link>
    <Link to='/login' className="nav-link"><button
            className="btn btn-solid-secondary">Login</button></Link> */}
    </nav>
}