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
    background:
      'repeating-linear-gradient(white, white 2px, #7AB4E2 2px, #7AB4E2 3px)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: '#183D58',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Tap the Settings of your soul. Open the State, tap the Happy checkbox and
      forget the password!{' '}
      <p>
        {' '}
        Зайди в "настройки" души. Открой папку "состояние", поставь галочку на
        "счастлива/счастлив" и забудь пароль!
      </p>
    </h1>
  </div>
);

export default HomeView;
