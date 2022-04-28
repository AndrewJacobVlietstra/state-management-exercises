import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/reducers/userSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogUserOut = () => {
    return dispatch(userActions.logUserOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {userState.isLoggedIn ? 
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>My Products</Link>
          </li>
          <li>
            <Link to='/sales'>My Sales</Link>
          </li>
          <li>
            <button onClick={handleLogUserOut}>Logout</button>
          </li>
        </ul>
      </nav> : <h2>Please Log In</h2>}
    </header>
  );
};

export default Header;
