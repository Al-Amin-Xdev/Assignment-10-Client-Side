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
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AllCrops from './Components/AllCrops.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import CropDetails from './Components/CropDetails.jsx';
import Profile from './Components/Profile.jsx';
import AddCrop from './Components/AddCrop.jsx';
import Myposts from './Components/Myposts.jsx';
import Myinterests from './Components/Myinterests .jsx';

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

      { path: '/addcrop', 
        element: <PrivateRoute><AddCrop /></PrivateRoute> },

      { path: '/mypost', 
        element: <PrivateRoute><Myposts /></PrivateRoute> },

      { path: '/myinterest', 
        element: <PrivateRoute><Myinterests /></PrivateRoute> },


      { path: '/register', Component: Register },
      { path:'/login' , Component: Login },

      { path:'/profile' , element: <PrivateRoute><Profile></Profile></PrivateRoute> },

      { path:'/cropdetails/:id',
        loader: ({params})=> fetch(`http://localhost:5000/allproducts/${params.id}`), 
        element: <PrivateRoute><CropDetails></CropDetails></PrivateRoute>},
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
