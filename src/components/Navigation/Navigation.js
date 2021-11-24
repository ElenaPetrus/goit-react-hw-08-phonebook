import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
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

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <NavLink to="/" style={styles.link}>
          <Button>Home Page</Button>
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink to="/contacts" style={styles.link}>
              <Button>Contacts</Button>
            </NavLink>
            <NavLink to="/upload" style={styles.link}>
              <Button> Upload</Button>
            </NavLink>
          </>
        )}
      </ButtonGroup>
    </nav>
  );
};

export default Navigation;
