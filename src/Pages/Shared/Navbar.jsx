import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className='hover:bg-teal-600 hover:text-white'>Home</NavLink>
      </li>
      <li><a href="#services" className='hover:bg-teal-600 hover:text-white'>Services</a>
      </li>
      <li>
        <NavLink to="/login" className='hover:bg-teal-600 hover:text-white'>Login</NavLink>
      </li>
      <li>
        <NavLink to="/register" className='hover:bg-teal-600 hover:text-white'>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
      <NavLink to='/' className='text-3xl font-semibold text-teal-600'>Social Events</NavLink>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-teal-600 font-medium ">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        </label>
        {user ? <>
            <img src={user.photoURL} className="w-7 mr-2 rounded-full" alt="" />
            <a>{user.email}</a>
            <button onClick={handleSignOut} className="btn ml-2">
            Sign Out
          </button>
        </> : (
          <Link to="/login">
            <button className="btn text-teal-600 hover:bg-teal-600 hover:text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
