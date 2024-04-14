import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import Home from '../Pages/Home'
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from '../Pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
  },
])