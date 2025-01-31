import { Link } from 'react-router-dom';
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <Link to={`/comments/${comment.id}`}>
      <li className='comment'>
        <p className='username'>{comment.username}</p>
        <img src={comment.src} alt='' />
      </li>
    </Link>
  );
};

export default Comment;
