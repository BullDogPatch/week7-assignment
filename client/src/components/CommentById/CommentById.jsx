import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CommentById.css';
import { toast } from 'react-toastify';
import { deleteCommentByid, fetchCommentByid } from '../../utils/api';

const formatDate = (date) => {
  const parsedDate = new Date(date);
  return parsedDate.toString() === 'Invalid Date'
    ? ''
    : new Intl.DateTimeFormat('en-GB').format(parsedDate);
};

const BASE_URL = 'https://week7-assignment-jw9m.onrender.com';

const CommentById = ({ setComments }) => {
  const [commentById, setCommentById] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCommentByid(id);
        setCommentById(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    const success = await deleteCommentByid(id);
    if (success) {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
      toast.success('Comment deleted successfully! 🎉');
      navigate('/comments');
    } else {
      toast.error('Failed to delete comment');
    }
  };

  const handleLikeUpdate = async () => {
    setCommentById((prev) => ({ ...prev, likes: prev.likes + 1 }));
    const response = await fetch(`${BASE_URL}/comments/${id}/likes`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      setCommentById((prev) => ({ ...prev, likes: prev.likes - 1 }));
    }
  };

  return (
    <div className='comment-page'>
      <div className='comment-by-id'>
        <p>{commentById.username || 'Loading username...'}</p>
        <p>{commentById.band_name || 'Loading band name...'}</p>
        <img
          src={
            commentById.src ||
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
          }
          alt={`picture of the band ${commentById.band_name || 'band'}`}
        />
        <p>{'⭐'.repeat(commentById.musical_rating) ?? 'Loading rating...'}</p>
        <p>
          {commentById.created_at
            ? formatDate(commentById.created_at)
            : 'Loading date...'}
        </p>
        <p>{commentById.likes ?? 0}</p>
        <button onClick={handleLikeUpdate}>Upvote</button>
        <button onClick={() => handleDelete(commentById.id)}>
          Delete comment
        </button>
      </div>
    </div>
  );
};

export default CommentById;
