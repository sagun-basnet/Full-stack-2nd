import React from "react";

const Form = ({ type }) => {
  return (
    <div className="h-screen grid place-items-center">
      <form className="w-[40%] p-12 flex flex-col gap-12 border-2 rounded-lg">
        <h1 className="text-3xl uppercase font-bold text-center">{type}</h1>
        {type !== "login" && (
          <>
            <input
              className="border-2 rounded-md p-2 w-full"
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
            />
            <input
              className="border-2 rounded-md p-2 w-full"
              type="text"
              name="address"
              id=""
              placeholder="Enter your address"
            />
            <input
              className="border-2 rounded-md p-2 w-full"
              type="number"
              name="phone"
              id=""
              placeholder="Enter your phone number"
            />
          </>
        )}
        <input
          className="border-2 rounded-md p-2 w-full"
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
        />
        <input
          className="border-2 rounded-md p-2 w-full"
          type="password"
          name="password"
          id=""
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="font-bold bg-red-400 p-2 px-4 rounded-md"
        >
          {type}
        </button>
      </form>
    </div>
  );
};

export default Form;
