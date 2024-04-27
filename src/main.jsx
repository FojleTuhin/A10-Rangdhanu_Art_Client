import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import Root from './Pages/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FirebaseProvider from './Firebase/FirebaseProvider';
import Error from './Pages/Error';
import AddCraftItem from './Pages/AddCraftItem';
import ViewDetails from './Pages/ViewDetails';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        path:'/addCraft',
        element:<AddCraftItem></AddCraftItem>
      },
      {
        path:'/viewDetails',
        element:<ViewDetails></ViewDetails>
      } 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
