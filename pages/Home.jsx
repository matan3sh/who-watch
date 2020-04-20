import Navbar from '../components/layout/Navbar.jsx';
import Users from '../components/users/Users.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </section>
    );
  }
}
