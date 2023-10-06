import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const naviagte = useNavigate()


    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            // ??Navigate after login
            naviagte(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error)
        })
    }

  return (
    <div>
      <div className=" mb-10">
        <h2 className="text-3xl my-5 text-center font-semibold">Please Login</h2>
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
            <button className="btn bg-teal-600 text-white">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Do not have an account ? <Link to="/register" className="text-red-600 font-bold">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
