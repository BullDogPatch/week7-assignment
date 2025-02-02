const BASE_URL = 'https://week7-assignment-jw9m.onrender.com';

export const fetchComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/comments`);
    if (!response.ok) {
      throw new Error('failed to fetch comment');
    }
    const data = await response.json();
    return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCommentByid = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/comments/${id}`);
    if (!response.ok) {
      throw new Error('failed to fetch comment');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommentByid = async (id) => {
  try {
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
  } catch (error) {
    console.error('Error during delete request:', error);
    return false;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('falied to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
