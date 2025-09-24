import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Please enter all field");
      return;
    }

    if (formData.password.length < 8) {
      alert("Please enter password more than 8 char");
      return;
    }

    await axios
      .post("http://localhost:5005/login", formData)
      .then((res) => {
        console.log(res);

        return alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        return alert("Error while logging in");
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col p-12 gap-12 w-[40%] bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <input
          className="border-2 rounded-md p-2 px-4"
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="border-2 rounded-md p-2 px-4"
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <input
          className="border-2 rounded-md p-2 px-4 font-bold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default LoginPage;
