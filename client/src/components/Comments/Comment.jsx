const formatDate = (date) =>
  new Intl.DateTimeFormat('en-GB').format(new Date(date));

const Comment = ({ comment }) => {
  return (
    <li>
      <p>{comment.band_name}</p>
      <img
        style={{ width: '200px', height: '200px' }}
        src={comment.src}
        alt=''
      />
      <p>{comment.description}</p>
      <p>{comment.musical_rating}</p>
      <p>{formatDate(comment.created_at)}</p>
    </li>
  );
};

export default Comment;
