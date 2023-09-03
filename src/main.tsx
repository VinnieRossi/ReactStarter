import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { NotFound } from './NotFound/NotFound.tsx';
import { Team } from './Examples/Team.tsx';
import { Calendar } from './Examples/Calendar.tsx';
import { Dashboard } from './Examples/Dashboard.tsx';
import { Profile } from './Examples/Profile.tsx';
import { Projects } from './Examples/Projects.tsx';
import { Reports } from './Examples/Reports.tsx';
import { Settings } from './Examples/Settings.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'team',
        element: <Team />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
