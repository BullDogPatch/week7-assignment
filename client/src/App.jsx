import { useEffect, useState } from 'react';
import './App.css';
import Comment from './components/Comments/Comment';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

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
      <h1>BandReviews</h1>

      {/* <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
