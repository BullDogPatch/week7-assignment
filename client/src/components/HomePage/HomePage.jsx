import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className='main'>
      <p className='home-page-description'>
        Welcome to BandReviews, your go-to place to share and discover music
        experiences! Whether you've just seen a live show or heard an album that
        blew your mind, this is the space to leave your thoughts. From indie
        hits to rock legends, you can write and read reviews, connect with other
        music lovers, and dive deep into the world of sound. Join us, leave your
        mark, and find your next favorite band!
      </p>

      <Link to='/post-comment' className='create-post-link'>
        Create Post
      </Link>
    </main>
  );
};

export default HomePage;
