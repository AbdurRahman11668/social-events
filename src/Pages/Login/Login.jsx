import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          setSuccess("User Logged in Successfuly");
          // ??Navigate after login
          navigate(location?.state ? location.state : "/");
        } else {
          alert("please verify yyour email address.");
        }
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // ??Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className=" mb-10">
        <h2 className="text-3xl my-5 text-center font-semibold">
          Please Login
        </h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/3 mx-auto">
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn bg-teal-600 text-white"
            >
              Login
            </button>
          </div>
        </form>
            {registerError && <p className="text-red-700 text-center my-3">{registerError}</p>}
            {success && <p className="text-green-700 text-center my-3">{success}</p>}
        <p className="text-center mt-4">
          Do not have an account ?{" "}
          <Link to="/register" className="text-red-600 font-bold">
            Register
          </Link>
        </p>
        <div className=" md:w-3/4 lg:w-1/3 mx-auto ">
          <p className="mt-5 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="btn rounded-3xl w-full bg-blue-500 text-white text-xl"
            >
              <FaGoogle className="mr-2 text-blue-500 p-1 bg-white rounded-3xl text-3xl"></FaGoogle>{" "}
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
