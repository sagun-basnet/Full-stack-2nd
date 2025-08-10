import React from "react";
import Button from "./Button";

const Role = ({ role }) => {
  return (
    <div>
      {role === "admin" ? (
        <>
          <h1 className="text-3xl font-bold text-center">Welcome Admin</h1>
          <span>hello</span>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-center">Welcome Users</h1>
      )}

      {role === "admin" && (
        <button className="bg-black rounded-md p-2 px-4 text-white">
          Go to dashboard
        </button>
      )}
    </div>
  );
};

export default Role;
