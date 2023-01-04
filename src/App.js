import "./index.css";
import Usercard from "./Components/Usercard";

function App() {
  return (
    <>
      <div className="bg-yellow-500 py-6 font-Nunito w-full min-h-screen">
        <h1 className="text-center text-white font-bold text-5xl">
          List of
          <span className="underline underline-offset-4 px-2">GITHUB</span>
          Users
        </h1>
        <div className="flex flex-wrap justify-center my-5 items-center ">
          <Usercard />
        </div>
      </div>
    </>
  );
}

export default App;
