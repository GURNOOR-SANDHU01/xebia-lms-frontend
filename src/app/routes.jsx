import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';

// Pages
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import Courses from '../pages/Courses/Courses';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import FAQ from '../pages/FAQ/FAQ';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
