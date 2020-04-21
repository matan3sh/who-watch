export default class UserForm extends React.Component {
  state = {
    name: '',
  };

  onChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.name);
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2 className='text-dark'>Add User</h2>
        <input
          type='text'
          placeholder='Set A Nickname...'
          name='name'
          value={this.state.name}
          onChange={this.onChange}
        />
        <div>
          <input
            type='submit'
            value='Add User'
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    );
  }
}
