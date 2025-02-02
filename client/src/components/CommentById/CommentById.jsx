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

const CommentById = ({ setComments }) => {
  const [commentById, setCommentById] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const comment = await fetchCommentByid(id);
      if (comment) {
        setCommentById(comment);
      }
    })();
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
    const response = await fetch(`http://localhost:8080/comments/${id}/likes`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });

    setCommentById((prev) => ({ ...prev, likes: commentById.likes + 1 }));
  };

  return (
    <div className='comment-page'>
      <div className='comment-by-id'>
        <p>{commentById.username}</p>
        <p>{commentById.band_name}</p>
        <img
          style={{ width: '200px', height: '200px' }}
          src={
            commentById.src ||
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
          }
          alt={`picture of the band ${commentById.band_name}`}
        />
        <p>{commentById.musical_rating}</p>
        <p>{formatDate(commentById.created_at)}</p>
        <div>
          <button onClick={handleLikeUpdate}>Upvote</button>
          <p>{commentById.likes}</p>
          <button>Downvote</button>
        </div>
        <button onClick={() => handleDelete(commentById.id)}>
          Delete comment
        </button>
      </div>
    </div>
  );
};

export default CommentById;
