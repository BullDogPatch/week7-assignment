import { useEffect, useState } from 'react';
import './App.css';

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
          <li key={comment.id}>{comment.description}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
