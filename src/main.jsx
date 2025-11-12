import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Profile from './Components/Profile/Profile.jsx';
import AllFoods from './Components/AllFoods/AllFoods.jsx';
import FoodDetails from './Components/FoodDetails/FoodDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        loader:()=>fetch('http://localhost:3000/foods'),
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
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/allFoods',
        loader:()=>fetch('http://localhost:3000/foods'),
        element:<AllFoods></AllFoods>
      },
      {
        path:'/foodDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`),
        element:<FoodDetails></FoodDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
