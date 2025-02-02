import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' style={{ color: 'white' }}>
        <h1>BandReviews</h1>
      </Link>
      <div className='links'>
        <NavLink
          to='/comments'
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          end
        >
          Posts
        </NavLink>
        <NavLink
          to='/users'
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        >
          Users
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
