import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="w-full h-20 bg-teal-600"></div> */}
      <Home />
    </>
  );
}

export default App;
