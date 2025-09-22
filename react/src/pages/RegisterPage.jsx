import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

    axios
      .post("http://localhost:5005/post-user", formData)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/table");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col p-12 gap-12 w-[40%] bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <input
          className="border-2 rounded-md p-2 px-4"
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="border-2 rounded-md p-2 px-4"
          type="number"
          placeholder="Enter Phone"
          name="phone"
          onChange={handleChange}
        />
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

export default RegisterPage;
