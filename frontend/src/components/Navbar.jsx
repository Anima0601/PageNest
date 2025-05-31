import { Link } from "react-router-dom";
import Login from "./Login";
function Navbar() {
  const NavItems = (
    <>
      <li className="font-bold"><Link to="/">Home</Link></li>
      <li className="font-bold"><Link to="/">About</Link></li>
      <li className="font-bold"><Link to="/course">Course</Link></li>
      <li className="font-bold"><Link to="/contactus">Contact</Link></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start m-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {NavItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">PageNest🪹</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavItems}
          </ul>
        </div>
      </div>
      <div className="navbar-end mr-2">
        <button className="btn btn-neutral"
        onClick={()=>document.getElementById("my_modal_1").showModal()}>Login</button>
         <Login/>
      </div>
    </div>
  )
}

export default Navbar
