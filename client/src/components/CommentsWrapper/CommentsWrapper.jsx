import Comment from '../Comments/Comment';
import './CommentsWrapper.css';

const CommentsWrapper = ({ comments }) => {
  return (
    <ul className='comments-wrapper'>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsWrapper;
