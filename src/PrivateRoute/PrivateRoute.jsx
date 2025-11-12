import React, { useContext } from 'react';
import AuthContext from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loader';

const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
      return <Loading></Loading>
    }
    if(user){
      return children;
    }
    return <Navigate state={location.pathname} to="/Login"></Navigate>;
};

export default PrivateRoute;