const UserItem = ({ user, deleteUser, showUserTvShows }) => {
  const { name, id } = user;
  return (
    <div className='card bg-light text-center'>
      <img className='avatar' src={`assets/img/${id}.png`} alt='' />
      <h3 className='text-dark'>{name}</h3>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => showUserTvShows(id)}
        >
          <i className='fas fa-hand-pointer'></i>
        </button>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => deleteUser(id)}
        >
          <i className='fas fa-trash'></i>
        </button>
      </p>
    </div>
  );
};

export default UserItem;
