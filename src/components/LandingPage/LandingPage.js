import './LandingPage.css';
import { Link } from 'react-router-dom';


 export const LandingPage = () => {
    return <div className='landingPage bg-clr'>
        <div className='content-landingPage p-1'>
        <h1 className='title-landingPage heading-1'>Jotter</h1>
        <p className='heading-2'>Note taking now made easy..</p>
        <div className='link-landingPage display-flex'>
       <Link to='/login'> <button className='btn btn-l btn-solid-secondary'>Login</button></Link>
        <Link to='/signup' className="link secondary-link">Create an account?</Link>
        </div>
        </div>
    </div>
}