import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostForm.css';

const PostForm = ({ setComments }) => {
  const [formData, setFormData] = useState({
    username: '',
    band_name: '',
    src: '',
    description: '',
    musical_rating: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/post-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    try {
      if (response.ok) {
        setComments((prev) => [data, ...prev]);
        setFormData({
          username: '',
          band_name: '',
          src: '',
          description: '',
          musical_rating: 1,
        });

        navigate('/comments');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input
        value={formData.username}
        type='text'
        name='username'
        id='username'
        required
        placeholder='Enter your name'
        onChange={handleChange}
      />

      <label htmlFor='band-name'>Band Name:</label>
      <input
        value={formData.band_name}
        type='text'
        name='band_name'
        id='band-name'
        required
        placeholder='Enter band here'
        onChange={handleChange}
      />

      <label htmlFor='image-url'>Band Name:</label>

      <input
        value={formData.src}
        type='text'
        name='src'
        id='image-url'
        required
        placeholder='image url'
        onChange={handleChange}
      />

      <label htmlFor='description'>Description:</label>
      <textarea
        value={formData.description}
        name='description'
        id='description'
        rows='10'
        placeholder='Please leave a comment'
        required
        onChange={handleChange}
      ></textarea>

      <label htmlFor='musical-rating'>Rating:</label>
      <input
        value={formData.musical_rating}
        type='number'
        name='musical_rating'
        id='musical-rating'
        required
        onChange={handleChange}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default PostForm;
