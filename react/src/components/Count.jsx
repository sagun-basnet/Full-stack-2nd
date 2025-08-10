import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const Count = () => {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  //   let count = 0;

  const add = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  useEffect(() => {
    console.log("I am from useEffect");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <span>{count}</span>
      <button onClick={add} className="bg-green-500 rounded-md p-2 px-4">
        Add <FaHome className="text-white text-2xl" />
      </button> */}
      <button
        style={{ backgroundColor: isDisplay ? "white" : "black" }}
        onClick={handleDisplay}
        className="bg-green-500 rounded-md p-2 px-4"
      >
        {isDisplay ? "see less" : "see more"}
      </button>
      {isDisplay && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ad
          excepturi, nostrum, error doloribus eum deleniti repudiandae atque
          eaque similique obcaecati libero velit delectus. Quod culpa quisquam
          atque a.
        </p>
      )}
    </div>
  );
};

export default Count;
