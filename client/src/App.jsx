import { useEffect, useState } from 'react';
import './App.css';
import Comment from './components/Comment';

function App() {
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
    <>
      <h1>Band Reviews</h1>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
}

export default App;
