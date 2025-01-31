import './App.css';
import Comment from './components/Comments/Comment';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/comments' element={<CommentsWrapper />} />
      </Routes>
    </>
  );
}

export default App;
