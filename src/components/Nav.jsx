import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/images/logo-2.png";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { useState } from "react";
function Nav() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
          }
          to="/"
        >
          <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            Home
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
          }
          to="/about"
        >
          <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            About us
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
          }
          to="/contact"
        >
          <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            Contact
          </span>
        </NavLink>
      </li>
    </>
  );
  return (
    // <div className="bg-[#253046] py-2 ">
    //   <div className="navbar  max-w-6xl mx-auto">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //         >
    //           {links}
    //         </ul>
    //       </div>
    //       {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    //       <div className="flex items-center gap-2">
    //         <img className="w-10" src={logo} alt="" />
    //         <Link className="text-2xl font-medium font-lato text-white">
    //           <span className="font-extrabold">Elysian</span>Estates
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className=" menu-horizontal space-x-5">{links}</ul>
    //     </div>
    //     <div className="navbar-end">
    //       <div
    //         tabIndex={0}
    //         role="button"
    //         className="btn btn-ghost btn-circle avatar"
    //       >
    //         <div className="w-10 rounded-full">
    //           <img
    //             alt="Tailwind CSS Navbar component"
    //             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //           />
    //         </div>
    //       </div>
    //       <button className="btn">Login</button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#253046]">
      <MDBNavbar expand="lg" className=" max-w-6xl mx-auto">
        <MDBContainer fluid>
          <MDBNavbarBrand
            className="lg:w-[450px] text-white  font-medium"
            href="#"
          >
            <span className="font-extrabold text-2xl"> Elysian</span>{" "}
            <span className="text-2xl">Estates</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 space-x-5">
              {links}
            </MDBNavbarNav>
            <div>
              <button className="btn btn-outline bg-white">Login</button>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Nav;
