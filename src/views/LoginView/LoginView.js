import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast.info('Please type your email and password');
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Data to log in</h2>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button variant="contained" size="small" type="submit">
          Let's go
        </Button>
      </form>
    </div>
  );
}
