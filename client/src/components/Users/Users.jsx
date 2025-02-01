import { useState, useEffect } from 'react';
import User from '../User/User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='users-page'>
      <ul>
        {users.map((user, idx) => (
          <User user={user} key={idx} idx={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
