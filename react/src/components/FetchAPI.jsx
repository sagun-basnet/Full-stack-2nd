import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const FetchAPI = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    // try {
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //   setData(res.data);
    // } catch (err) {
    //   console.log(err);
    // }

    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, ":DATA");

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item, index) => {
        return <Card index={index} title={item.title} body={item.body} />;
      })}
    </div>
  );
};

export default FetchAPI;
