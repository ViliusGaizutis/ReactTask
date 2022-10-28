import React, { FunctionComponent, Suspense, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { authorize, authenticate } from 'redux/actionCreators/auth';

// Types
import type { AuthorizationRequest, AuthenticationResponse } from 'types';

// Components
import Layout from 'components/shared/Layout/Layout';

// Lazy components
const DashboardPage = React.lazy(() => import('components/pages/DashboardPage/DashboardPage'));
const AboutPage = React.lazy(() => import('components/pages/AboutPage/AboutPage'));
const FeedbackPage = React.lazy(() => import('components/pages/FeedbackPage/FeedbackPage'));
const NotFoundPage = React.lazy(() => import('components/pages/NotFoundPage/NotFoundPage'));

// Routes
const routes = [
  { path: '/', name: 'Home', Component: DashboardPage },
  { path: '/locations/:locationId', name: 'Location', Component: DashboardPage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/feedback', name: 'Feedback', Component: FeedbackPage },
  { path: '*', name: '404', Component: NotFoundPage }
];

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAuth = useCallback(async () => {
    const res = await dispatch(authenticate());

    const credentials: AuthorizationRequest = {
      user: process.env.USER,
      password: process.env.PASSWORD
    };

    if (!((res as unknown) as AuthenticationResponse).data.token) {
      await dispatch(authorize(credentials));
    }
  }, [dispatch]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
