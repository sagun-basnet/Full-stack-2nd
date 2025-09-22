import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("http://localhost:5005/get-user")
      .then((res) => {
        console.log(res.data.result);
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleted = async (id) => {
    await axios
      .delete(`http://localhost:5005/delete-user/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative overflow-x-auto flex flex-col p-8 gap-4">
      <div className="flex justify-end">
        <Link to="/register">
          <button className="p-2 px-4 bg-blue-600 rounded-md font-bold">
            Add user
          </button>
        </Link>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Email
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
          {data.map((item, index) => {
            return (
              <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.password}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="p-2 px-4 rounded-md font-bold bg-blue-500 text-white">
                      Edit
                    </button>
                    <button
                      className="p-2 px-4 rounded-md font-bold bg-red-500 text-white"
                      onClick={() => handleDeleted(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
