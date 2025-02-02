const User = ({ user, idx }) => {
  return (
    <div className='user'>
      <p>{user.username}</p>
      <img
        src={`https://randomuser.me/api/portraits/men/${idx}.jpg`}
        alt={`Image of user`}
      />
    </div>
  );
};

export default User;
