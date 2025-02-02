import { Link } from 'react-router-dom';
import './Comment.css';
import { useEffect } from 'react';

const Comment = ({ comment }) => {
  return (
    <Link to={`/comments/${comment.id}`}>
      <li className='comment'>
        <p className='username'>{comment.username}</p>
        <img src={comment.src} alt='' />
        <p>Upvotes: {comment.likes}</p>
      </li>
    </Link>
  );
};

export default Comment;
