import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
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

    await axios
      .post(`http://localhost:5550/api/update-user/${parseInt(id)}`, formData)
      .then((res) => {
        navigate("/crud");
      })
      .catch((err) => {
        console.log(err);
        return alert("Error while logging in");
      });
  };

  const fetchData = async () => {
    await axios
      .get(`http://localhost:5550/api/get-single-user/${parseInt(id)}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.error("Error in fetching user data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col p-12 gap-12 w-[40%] bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center">Edit User</h1>
        <input
          className="border-2 rounded-md p-2 px-4"
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          className="border-2 rounded-md p-2 px-4"
          type="number"
          placeholder="Enter Phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          className="border-2 rounded-md p-2 px-4"
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="border-2 rounded-md p-2 px-4"
          type="text"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={formData.password}
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

export default EditUser;
