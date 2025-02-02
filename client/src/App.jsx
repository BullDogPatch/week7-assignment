import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper';
import CommentById from './components/CommentById/CommentById';
import PostForm from './components/PostForm/PostForm';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';
import './App.css';

// react-top-loader video (https://www.youtube.com/watch?v=cDzfTkS4eoc)
function App() {
  const [comments, setComments] = useState([]);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch('http://localhost:8080/comments');
      const data = await response.json();
      setComments(data);
    };
    getComments();
  }, []);

  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 0);
  }, [location]);

  return (
    <>
      <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={5}
      />
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
        <Route
          path='/comments/:id'
          element={<CommentById setComments={setComments} />}
        />
        <Route path='/users' element={<Users />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
