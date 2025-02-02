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
import { fetchComments } from './utils/api';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const [comments, setComments] = useState([]);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
          element={
            <CommentsWrapper comments={comments} setComments={setComments} />
          }
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
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
