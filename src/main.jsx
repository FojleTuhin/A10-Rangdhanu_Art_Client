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
import UpdateCraft from './Pages/UpdateCraft';
import Categories from './Component/Categories';
import SimilarCategories from './Pages/SimilarCategories';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('https://rangdhanu-art-server.vercel.app/item'),
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
        loader:()=>fetch('https://rangdhanu-art-server.vercel.app/item')
      },
      {
        path:'/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:()=>fetch('https://rangdhanu-art-server.vercel.app/item')
      }, 
      {
        path:'/allArtCraft/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:()=>fetch('https://rangdhanu-art-server.vercel.app/item')
        
      },
     
      {
        path:'/myArtAndCraft',
        element:<PrivateRoute><MyArtAndCraft></MyArtAndCraft></PrivateRoute>,
        loader:()=>fetch('https://rangdhanu-art-server.vercel.app/item')
      },
      {
        path:'myArtAndCraft/updateCraft/:id',
        element:<PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
        loader:({params})=> fetch(`https://rangdhanu-art-server.vercel.app/item/${params.id}`)
      },
      {
        path:'/categories',
        element:<Categories></Categories>,
      },
      
      {
        path:'/similarCategories/:id',
        element:<SimilarCategories></SimilarCategories>,
        loader:()=>fetch(`https://rangdhanu-art-server.vercel.app/categories`)
      },
      {
        path:'/similarCategories/:id/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:()=>fetch('https://rangdhanu-art-server.vercel.app/item')
        
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
