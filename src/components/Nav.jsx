import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/images/logo-2.png";
import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthProviderComponent";

function Nav() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        console.log("success signout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#253046] py-2">
      <div className="navbar  max-w-6xl mx-auto px-6 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn pl-0 text-white  btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-lg dropdown-content mt-3 z-[2] p-2 shadow bg-[#253046] rounded-box w-[90vw]"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfa436] px-4 py-1"
                    : "font-medium text-white group px-4 py-1 transition-all  ease-in-out"
                }
                to="/"
              >
                <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  Home
                </span>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CFA336] px-4 py-1"
                    : "font-medium text-white px-4 py-1 duration-400  group  transition-all duration-300 ease-in-out"
                }
                to="/about"
              >
                <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  About us
                </span>
              </NavLink>

              {user ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#CFA336] px-4 py-1"
                        : "font-medium text-white px-4 py-1  duration-400  group  transition-all duration-300 ease-in-out"
                    }
                    to="/contact"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                      Contact
                    </span>
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#CFA336] px-4 py-1"
                        : "font-medium text-white px-4 py-1  duration-400  group  transition-all duration-300 ease-in-out"
                    }
                    to="/updateprofile"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                      Update Profile
                    </span>
                  </NavLink>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>

          <Link to="/" className="flex  items-center gap-2">
            <img className="lg:w-10 md:w-10 w-8" src={logo} alt="" />
            <Link className="text-2xl font-medium hidden lg:flex md:flex font-lato text-white">
              <span className="font-extrabold ">Elysian</span>
              Estates
            </Link>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal space-x-6 uppercase text-sm">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfa436]"
                    : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
                }
                to="/"
              >
                <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CFA336]"
                    : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
                }
                to="/about"
              >
                <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  About us
                </span>
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#CFA336]"
                        : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
                    }
                    to="/contact"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                      Contact
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#CFA336]"
                        : "font-medium text-white  duration-400  group  transition-all duration-300 ease-in-out"
                    }
                    to="/updateprofile"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r pb-0.5 from-[#CFA336] to-[#CFA336] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                      Update Profile
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link
                to="/profile"
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar z-10 tooltip tooltip-bottom"
                data-tip={user?.displayName || ""}
              >
                <div className="w-10 mt-1 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || "not found"}
                  />
                </div>
              </Link>
            </>
          ) : (
            <></>
          )}

          {user ? (
            <>
              <button
                onClick={handleSignOutUser}
                className="rounded-sm  btn btn-sm font-bold px-4 bg-[#CFA336] border-0 text-white hover:bg-[#b68f2d] "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-sm btn btn-sm font-bold px-4 bg-[#CFA336] border-0 text-white hover:bg-[#b68f2d] "
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
