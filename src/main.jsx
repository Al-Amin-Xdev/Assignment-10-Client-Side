import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import Product from './Components/Product.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AllCrops from './Components/AllCrops.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AllCropsPage from './Components/AllCropsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      { index: true,
        loader: ()=> fetch("http://localhost:5000/allproducts"),
      Component: Home },
      { path: '/allcrops',
        loader: ()=> fetch("http://localhost:5000/allproducts"), 
        Component: AllCrops },
      { path: '/register', Component: Register },
      { path:'/login' , Component: Login },
      { path:'/product' , element: <PrivateRoute><Product></Product></PrivateRoute> }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
