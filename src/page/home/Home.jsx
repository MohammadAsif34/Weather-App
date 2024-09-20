import React, { useState } from "react";
import logo from "/vite.svg";
// import "./Home.css";
import bg from "../../assets/home-img2.jpg";

const Home = () => {
  const [weather, setWeather] = useState({});
  const api = () => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=8b7b8890d1ef4293bfd174923242009&q=kolkata"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
    // console.log(weather.location.name);
  };
  api();
  return (
    <>
      <div className="w-full h-full bg-[url('../../assets/image.png')]">
        <div className="w-full h-20 bg-teal-700"></div>
        {/* <img src={bg} alt="" className="w-full h-full"></img> */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-1/2 h-96 bg-teal-600">
            <p>
              {weather.location.name},&nbsp;{weather.location.region}
            </p>
            <img src={weather.current.condition.text} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
