import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper';
import CommentById from './components/CommentById/CommentById';
import PostForm from './components/PostForm/PostForm';
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
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/comments'
          element={<CommentsWrapper comments={comments} />}
        />
        <Route
          path='/post-comment'
          element={<PostForm setComments={setComments} />}
        />
        <Route path='/comments/:id' element={<CommentById />} />
      </Routes>
    </>
  );
}

export default App;
