import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
    color: '#1782d2',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Wellcome, {name} </span>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        The exit is always there
      </Button>
    </div>
  );
}
