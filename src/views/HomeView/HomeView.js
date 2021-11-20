import React from 'react';
// import s from './HomeView.module.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Зайди в "настройки" души. Открой папку "состояние", поставь галочку на
      "счастлива" и забудь пароль!
    </h1>
  </div>
);

export default HomeView;
