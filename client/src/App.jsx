import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper';
import './App.css';
import CommentById from './components/CommentById/CommentById';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/comments' element={<CommentsWrapper />} />
        <Route path='/comments/:id' element={<CommentById />} />
      </Routes>
    </>
  );
}

export default App;
