import { FaTriangleExclamation } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div className=" ">
      <div className="flex justify-center items-center h-screen flex-col">
        <FaTriangleExclamation className="text-2xl"></FaTriangleExclamation>
        <h1 className="text-2xl pt-2 font-medium">
          {error.status || 404} - page not found
        </h1>
        <h4 className="text-sm py-2 font-medium">
          {error.data || error.statusText || error.error?.message}
        </h4>
        <Link to="/">
          <button className="btn bg-[#CFA336] rounded-sm mt-4 text-white first-letter:">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
