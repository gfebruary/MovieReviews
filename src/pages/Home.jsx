import React from "react";
import backgroundImage from "../assets/dummy-background.jpg";

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}></div>
  );
};

export default Home;
