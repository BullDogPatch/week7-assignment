export const fetchComments = async () => {
  try {
    const response = await fetch('http://localhost:8080/comments');
    if (!response.ok) {
      throw new Error('failed to fetch comment');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchCommentByid = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/comments/${id}`);
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
    const response = await fetch(`http://localhost:8080/delete-comment/${id}`, {
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
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      throw new Error('falied to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
