import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider.jsx';

import NavBar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import FundraiserPage from './pages/FundraiserPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import CreateFundraiserPage from './pages/CreateFundraiserPage';
import UpdateFundraiserPage from './pages/UpdateFundraiserPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element:<NavBar />,
    children: [
      {path: '/',element:<HomePage />},
      {path: '/fundraisers/:id', element: <FundraiserPage />},
      {path:'/login', element: <LoginPage />},
      {path:'/signup', element: <SignupPage />},
      {path:'/createfundraiser', element: <CreateFundraiserPage />},
      {path:'/fundraisers/:id/update', element: <UpdateFundraiserPage />},
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router = {router} />
    </AuthProvider>
  </React.StrictMode>
);