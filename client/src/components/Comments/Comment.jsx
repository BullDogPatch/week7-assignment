import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <Link to={`/comments/${comment.id}`}>
      <li className='comment'>
        <p className='username'>{comment.username}</p>
        <img src={comment.src} alt='' />
        {/* <span className='likes'>
          <button className='like-button'>
            <FaArrowUp />
          </button>
          <span className='like-count'>{comment.likes}</span>
          <button className='like-button'>
            <FaArrowDown />
          </button>
        </span> */}
        <p>Upvotes: {comment.likes}</p>
      </li>
    </Link>
  );
};

export default Comment;
