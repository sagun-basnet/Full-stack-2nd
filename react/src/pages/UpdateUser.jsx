import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const fetchData = () => {
    axios
      .get(`http://localhost:5005/get-single-user/${id}`)
      .then((res) => {
        // console.log(res.data.result[0]);
        setFormData(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      .put(`http://localhost:5005/edit-user/${id}`, formData)
      .then((res) => {
        console.log(res);
        // alert(res.data.message);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in updating user");
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
        <h1 className="text-4xl font-bold text-center">Update User</h1>
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

export default UpdateUser;
