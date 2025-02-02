import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>BandReviews</h1>
      <div className='links'>
        <NavLink
          to='/comments'
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
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
