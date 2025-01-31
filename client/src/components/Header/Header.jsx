import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>BandReviews</h1>
      <Link to='/comments'>Leave feedback</Link>
    </header>
  );
};

export default Header;
