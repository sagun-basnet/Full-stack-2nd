import React from "react";

const Card = ({ index, title, body }) => {
  return (
    <div key={index} className="border-2 h-[22rem] p-4">
      <h1 className="font-bold text-center text-4xl ">{title}</h1>
      <p className="text-justify font-bold ">{body}</p>
    </div>
  );
};

export default Card;
