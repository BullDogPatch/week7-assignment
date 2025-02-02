const BASE_URL = 'https://week7-assignment-jw9m.onrender.com';

export const fetchComments = async () => {
  const response = await fetch(`${BASE_URL}/comments`);
  if (!response.ok) {
    throw new Error('failed to fetch comment');
  }
  const data = await response.json();
  return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

export const fetchCommentByid = async (id) => {
  const response = await fetch(`${BASE_URL}/comments/${id}`);
  if (!response.ok) {
    throw new Error('failed to fetch comment');
  }
  return await response.json();
};

export const postComment = async (formData) => {
  const response = await fetch(`${BASE_URL}/post-comment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to add comment ☹️');
  }

  return await response.json();
};

export const deleteCommentByid = async (id) => {
  const response = await fetch(`${BASE_URL}/delete-comment/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('failed to delete comment ☹️');
  }
  return true;
};

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('falied to fetch users');
  }
  return await response.json();
};
