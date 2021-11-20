// import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UseMenu';
import AuthNav from '../AuthNav/AuthNav';
// import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  return (
    <header style={styles.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}