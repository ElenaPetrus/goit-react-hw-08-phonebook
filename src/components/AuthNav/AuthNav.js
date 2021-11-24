import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
};

export default function AuthNav() {
  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <NavLink to="/register" style={styles.link}>
          <Button>Registration</Button>
        </NavLink>
        <NavLink to="/login" style={styles.link}>
          <Button>Login</Button>
        </NavLink>
      </ButtonGroup>
    </div>
  );
}
