import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <Link to='/about'>
          <li>
            <img src='/src/assets/img/MERNSTACKIMG-removebg.png' alt='MERN' />
          </li>
        </Link>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/projects'>
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
