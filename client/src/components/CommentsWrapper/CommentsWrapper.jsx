import { useEffect, useState } from 'react';
import Comment from '../Comments/Comment';

const CommentsWrapper = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch('http://localhost:8080/comments');
      const data = await response.json();
      console.log(data);
      setComments(data);
    };
    getComments();
  }, []);

  return (
    <ul>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsWrapper;
