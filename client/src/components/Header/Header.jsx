import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>BandReviews</h1>
      <Link to='/post-comment'>Post your experience</Link>
    </header>
  );
};

export default Header;
