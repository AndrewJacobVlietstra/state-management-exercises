import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const userState = useSelector((state) => state.user);
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <span>Welcome, {userState.userName}</span>
    </main>
  );
};

export default UserProfile;
