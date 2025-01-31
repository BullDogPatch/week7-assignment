import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const formatDate = (date) => {
  const parsedDate = new Date(date);
  return parsedDate.toString() === 'Invalid Date'
    ? ''
    : new Intl.DateTimeFormat('en-GB').format(parsedDate);
};

const CommentById = ({ setComments }) => {
  const [commentById, setCommentById] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCommentById = async () => {
      const response = await fetch(`http://localhost:8080/comments/${id}`);
      const data = await response.json();
      setCommentById(data);
    };
    getCommentById();
  }, [id]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/delete-comment/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setComments((prev) => prev.filter((comment) => comment.id !== id));
        navigate('/comments');
      } else {
        console.log('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error during delete request:', error);
    }

    console.log(id);
  };

  return (
    <div>
      <p>{commentById.username}</p>
      <p>{commentById.band_name}</p>
      <img
        style={{ width: '200px', height: '200px' }}
        src={
          commentById.src ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }
        alt=''
      />
      <p>{commentById.musical_rating}</p>
      <p>{formatDate(commentById.created_at)}</p>

      <button onClick={() => handleDelete(commentById.id)}>
        Delete comment
      </button>
    </div>
  );
};

export default CommentById;
