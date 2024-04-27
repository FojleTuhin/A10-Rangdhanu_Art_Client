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
import AllArtCraft from './Pages/AllArtCraft';
import MyArtAndCraft from './Pages/MyArtAndCraft';
import PrivateRoute from './Pages/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/item')
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
        element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path:'/allArtCraft',
        element:<AllArtCraft></AllArtCraft>,
        loader:()=>fetch('http://localhost:5000/item')
      },
      {
        path:'/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/item')
        
      }, 
      {
        path:'/allArtCraft/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/item')
        
      },
      {
        path:'/myArtAndCraft',
        element:<PrivateRoute><MyArtAndCraft></MyArtAndCraft></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/item')
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
