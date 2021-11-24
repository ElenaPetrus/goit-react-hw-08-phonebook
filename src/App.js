import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactsView/ContactsView';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import UploadView from './views/UploadView/UploadView';
import Container from './components/Container/Container';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import { ToastContainer } from 'react-toastify';

// const HomeView = lazy(() => import('./views/HomeView/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>...loading...</h1>
      ) : (
        <>
          <AppBar />
          <div>
            <Suspense fallback={<h1>...loading...</h1>}>
              <Routes>
                <Route
                  path="/"
                  element={<PublicRoute component={HomeView} />}
                />
                <Route
                  path="/register"
                  element={<PublicRoute component={RegisterView} restricted />}
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute
                      component={LoginView}
                      redirectTo="/contacts"
                      restricted
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      component={ContactsView}
                      redirectTo="/login"
                    />
                  }
                />
                <Route
                  path="/upload"
                  element={<PrivateRoute component={UploadView} />}
                />
              </Routes>
            </Suspense>
            <ToastContainer autoClose={2500} position="top-center" />
          </div>
        </>
      )}
    </Container>
  );
}
