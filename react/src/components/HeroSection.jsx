import React from "react";

const HeroSection = () => {
  const email = JSON.parse(localStorage.getItem("loginUser")).email;
  console.log(email);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{email}</h1>
    </div>
  );
};

export default HeroSection;
