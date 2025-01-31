import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const formatDate = (date) => {
  const parsedDate = new Date(date);
  return parsedDate.toString() === 'Invalid Date'
    ? ''
    : new Intl.DateTimeFormat('en-GB').format(parsedDate);
};

const CommentById = () => {
  const [commentById, setCommentById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCommentById = async () => {
      const response = await fetch(`http://localhost:8080/comments/${id}`);
      const data = await response.json();
      setCommentById(data);
    };
    getCommentById();
  }, [id]);

  return (
    <div>
      <p>{commentById.username}</p>
      <p>{commentById.band_name}</p>
      <img
        style={{ width: '200px', height: '200px' }}
        src={commentById.src}
        alt=''
      />
      <p>{commentById.musical_rating}</p>
      <p>{formatDate(commentById.created_at)}</p>
    </div>
  );
};

export default CommentById;
