// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactsView/ContactsView';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import Container from './components/Container/Container';
// import { authOperations } from './redux/auth';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </Container>
  );
}
