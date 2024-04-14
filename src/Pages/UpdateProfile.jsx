import { useContext, useState } from "react";
import { AuthContext } from "../AuthContextProvider/AuthProviderComponent";
import { Helmet } from "react-helmet-async";

function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const handleUpdateUserForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    console.log(name, photoURL);
    updateUserProfile(name, photoURL)
      .then(() => {
        console.log("update successfull");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" py-20 flex flex-col items-center bg-[#b68f2d27] ">
      <Helmet>
        <title>Elysian | Update Profile</title>
      </Helmet>
      <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-[#ffffff7f] text-gray-100">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user?.photoURL || "not found"}
            alt=""
            className="object-cover   object-center w-full h-full rounded-full bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl text-black font-semibold">
              {user?.displayName || "not found"}
            </h2>
            <span className="text-sm  text-gray-600">Member</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4 text-black"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="text-gray-800">
                {user?.email || "not found"}
              </span>
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setEdit(!edit)}
        className="btn rounded-sm text-white hover:bg-[#253046] bg-[#253046] mt-5"
      >
        Edit Profile
      </button>

      {edit ? (
        <>
          <form
            onSubmit={handleUpdateUserForm}
            noValidate=""
            action=""
            className="space-y-6 mt-10 w-5/12"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block dark:text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                className="w-full px-4 py-3  rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photo" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photo"
                required
                placeholder="url"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button className="block w-full btn bg-[#253046] hover:bg-[#253046] text-white p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
              Save Changes
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default UpdateProfile;
