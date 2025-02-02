import { useState, useEffect } from 'react';
import { fetchUsers } from '../../utils/api';
import User from '../User/User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchUsers();
      if (users) {
        setUsers(data);
      }
    })();
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
