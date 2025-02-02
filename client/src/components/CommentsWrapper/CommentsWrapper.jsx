import { useEffect } from 'react';
import Comment from '../Comments/Comment';
import './CommentsWrapper.css';
import { fetchComments } from '../../utils/api';

const CommentsWrapper = ({ comments, setComments }) => {
  useEffect(() => {
    (async () => {
      const data = await fetchComments();
      if (data) {
        setComments(data);
      }
    })();
  }, []);

  return (
    <ul className='comments-wrapper'>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsWrapper;
