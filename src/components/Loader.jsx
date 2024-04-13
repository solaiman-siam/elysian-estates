import { BarLoader } from "react-spinners";

function Loader() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <BarLoader
        color="#d0a946"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></BarLoader>
    </div>
  );
}

export default Loader;
