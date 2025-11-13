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
import AllReviews from './Components/AllReviews/AllReviews.jsx';
import MyReview from './Components/MyReveiw/MyReview.jsx';
import UpdateReview from './Components/UpdateReview/UpdateReview.jsx';
import AddReview from './Components/AddReview/AddReview.jsx';
import Favorites from './Components/Favorites/Favorites.jsx';
import Error from './Components/Error/Error.jsx';
import Loading from './Components/Loading/Loading.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        loader:()=>fetch('https://food-network-api.vercel.app/foods'),
        hydrateFallbackElement:<Loading></Loading>,
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
        loader:()=>fetch('https://food-network-api.vercel.app/foods'),
        hydrateFallbackElement:<Loading></Loading>,
        element:<AllFoods></AllFoods>
      },
      {
        path:'/foodDetails/:id',
        loader:({params})=>fetch(`https://food-network-api.vercel.app/foods/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,
        element:<FoodDetails></FoodDetails>
      },
      {
        path:'/allReviews',
        loader:()=>fetch('https://food-network-api.vercel.app/review'),
        hydrateFallbackElement:<Loading></Loading>,
        element:<AllReviews></AllReviews>
      },
      {
        path:'/myReview',
        loader:()=>fetch('https://food-network-api.vercel.app/reviews'),
        hydrateFallbackElement:<Loading></Loading>,
        element:<MyReview></MyReview>
      },
      {
        path: '/updateReview/:_id',
        element:<UpdateReview></UpdateReview>
      },
      {
        path:'/addReview',
        element:<AddReview></AddReview>
      },
      {
        path:'/myFavorites',
        loader:()=>fetch('https://food-network-api.vercel.app/favorites'),
        hydrateFallbackElement:<Loading></Loading>,
        element:<Favorites></Favorites>
      },
      {
        path:'/*',
        element:<Error></Error>
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
