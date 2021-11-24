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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if (email === '' || password === '' || name === '') {
      toast.info('Your contact details are required to make registration');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please fulfill the form for registration</h2>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button variant="contained" size="small" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
