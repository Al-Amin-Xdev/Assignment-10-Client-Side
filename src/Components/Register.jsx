import React, { useContext } from "react";
import AuthContext from "../AuthProvider/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {



  const { register, setUser, setLoading } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    console.log(name);
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    register(email, password)
    .then((userInfo) => {
      console.log(userInfo);
      alert("Registration Successfull ✔")

      updateProfile(userInfo.user, {
        displayName: name,
      })
      .then(()=>{
        setUser({...userInfo, displayName: name})
      })
      .catch((error)=>{
        console.log(error);
      });
      setLoading(false);

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });

    
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">

              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">

                  <label className="label">Name</label>
                  <input type="text" className="input" name="name" placeholder="Name" />

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
                    {/* <a className="link link-hover">Forgot password?</a> */}
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
<h1>This is Register page</h1>;
