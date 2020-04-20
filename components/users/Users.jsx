import UserItem from './UserItem.jsx';
import UserForm from './UserForm.jsx';
import TVShows from './TVShows.jsx';

export default class Users extends React.Component {
  state = {
    users: [
      {
        id: '1',
        name: 'Mother',
        tvShows: ['La Casa De Papel', 'The Witcher', 'Med Man'],
      },
      {
        id: '2',
        name: 'Father',
        tvShows: ['Breaking Bad', 'The Witcher', 'La Casa De Papel'],
      },
      {
        id: '3',
        name: 'Children',
        tvShows: ['Bodyguard', 'Med Man', 'La Casa De Papel'],
      },
    ],
    makeId: 4,
    userClicked: false,
    tvShowsToDisplay: '',
  };

  addUser = (userName) => {
    const user = {
      name: userName,
      id: this.state.makeId,
      tvShows: ['Bodyguard', 'The Office', 'La Casa De Papel', 'The Witcher'],
    };
    const newId = this.state.makeId + 1;
    this.setState({
      users: [...this.state.users, user],
      makeId: newId,
    });
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== userId),
      userClicked: false,
    });
  };

  showUserTvShows = (userId) => {
    const showTvShowsFlag = !this.state.userClicked;
    const userToDisplay = this.state.users.filter((user) => user.id === userId);
    this.setState({
      userClicked: showTvShowsFlag,
      tvShowsToDisplay: [...userToDisplay[0].tvShows],
    });
  };

  render() {
    const { users, userClicked, tvShowsToDisplay } = this.state;
    return (
      <div>
        <UserForm addUser={this.addUser} />
        <div className='users'>
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              deleteUser={this.deleteUser}
              showUserTvShows={this.showUserTvShows}
            />
          ))}
        </div>
        <div className='users'>
          {userClicked &&
            tvShowsToDisplay.map((show) => (
              <TVShows key={Math.random()} show={show} />
            ))}
        </div>
      </div>
    );
  }
}
