import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>BandReviews</h1>
      <Link to='/post-comment' className='create-post-link'>
        Create Post
      </Link>
    </header>
  );
};

export default Header;
