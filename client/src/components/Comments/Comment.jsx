import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
  return (
    <li>
      <p>{comment.username}</p>
      <p>{comment.band_name}</p>
      <img
        style={{ width: '200px', height: '200px' }}
        src={comment.src}
        alt=''
      />
      <p>{comment.description}</p>
      <Link to={`/comments/${comment.id}`}>See More</Link>
    </li>
  );
};

export default Comment;
