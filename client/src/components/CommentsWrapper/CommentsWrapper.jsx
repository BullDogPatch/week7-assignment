import { useEffect, useState } from 'react';
import Comment from '../Comments/Comment';
import './CommentsWrapper.css';
import { fetchComments } from '../../utils/api';

const CommentsWrapper = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.log(error);
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
