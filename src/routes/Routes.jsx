import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import Home from '../Pages/Home'
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from '../Pages/ErrorPage';
import Details from '../Pages/Details';
import PrivateRoute from '../Pages/PrivateRoute';
import About from '../Pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
      },
      {
        path: '/about',
        element: <PrivateRoute>
          <About></About>
        </PrivateRoute>,
      }
    ],
  },
])