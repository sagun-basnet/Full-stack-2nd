import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CRUD = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();
  const token = localStorage.getItem("authToken");

  const fetchData = async () => {
    await axios
      .get("http://localhost:5550/api/get-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.result);
      })
      .catch((err) => {
        console.error("Error in fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .post(`http://localhost:5550/api/delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(res.data.message);
        fetchData();
      })
      .catch((err) => {
        console.error("Error in deleting user:", err);
      });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col gap-8 mt-12 p-4">
      <div className="flex justify-end">
        <button
          className="p-2 px-4 bg-cyan-800 rouded-md"
          onClick={() => navigation("/register")}
        >
          Add User
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              phone
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.email}
                </th>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4 flex gap-2">
                  <Link
                    to={`/edit-user/${user.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CRUD;
