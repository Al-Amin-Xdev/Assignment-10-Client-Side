import React, { useContext } from "react";
import AuthContext from "../AuthProvider/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {

  const { login, PopUpLogIn, setUser, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const HandleLogin = (event)=>{
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    

    login(email, password)
    .then((userInfo) => {
      console.log(userInfo);
      setUser(userInfo);
      setLoading(false);
       Swal.fire({
        icon: "success",
        title: "Log-In",
        text: "Your log-in is successfull ✅",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(location?.state || '/');
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
       Swal.fire({
        icon: "info",
        title: "Log-In",
        text: "Your Log-in is not successfull",
        timer: 2000,
        showConfirmButton: false,
      });
    });
    
  };

  const HandlePopUpLogin = ()=>{
  
    
    PopUpLogIn()
    .then((userInfo) => {
      setUser(userInfo);
      Swal.fire({
        icon: "success",
        title: "Log-In",
        text: "Your log-in successfull ✅",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate(location?.state || '/');
      
    })
    .catch((error) => {
      const errorMessage = error.message;

      Swal.fire({
        icon: "info",
        title: "Log-In",
        text: "Your log-in is not successfull ",
        timer: 2000,
        showConfirmButton: false,
      });
      console.log(errorMessage);
    });

  }



  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Log in to connect with farmers, traders, and consumers. Manage your crops and interests easily.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={HandleLogin}>
                <fieldset className="fieldset">
                 <label className="label">Email</label>
                  <input type="email" className="input" name="email" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">Login</button>
                 
                </fieldset>
              </form>
                  <button type="button" onClick={HandlePopUpLogin} className="btn btn-neutral mt-4">
                    Sign In with GOOGLE
                  </button>
                  
                  <NavLink to="/resetPass"><button type="button" className="btn btn-neutral mt-4 w-full mx-auto">
                  Forgot Password !!? Reset Now
                  </button></NavLink>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;

