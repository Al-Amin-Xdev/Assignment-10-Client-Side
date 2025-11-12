import React, { useContext } from "react";
import AuthContext from "../AuthProvider/AuthContext";
import { useLocation, useNavigate } from "react-router";


const Login = () => {

  const { login, PopUpLogIn, setUser, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const HandleLogin = (event)=>{
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    login(email, password)
    .then((userInfo) => {
      console.log(userInfo);
      alert("Log in Successfull");
      navigate(location?.state || '/');
      setUser(userInfo);
      setLoading(false);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    
  };

  const HandlePopUpLogin = ()=>{
  
    PopUpLogIn()
    .then((userInfo) => {
      console.log(userInfo);
      alert("Log in Successfull");
      navigate(location?.state || '/');
      setUser(userInfo);
      setLoading(false);
    })
    .catch((error) => {
      const errorMessage = error.message;
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
                  <button className="btn btn-neutral mt-4">Login</button>
                  <button onClick={HandlePopUpLogin} className="btn btn-neutral mt-4">
                    Sign In with GOOGLE
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
<h1>This is login page</h1>;
