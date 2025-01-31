import Comment from '../Comments/Comment';

const CommentsWrapper = ({ comments }) => {
  return (
    <ul>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsWrapper;
