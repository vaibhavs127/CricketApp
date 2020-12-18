import React, { useEffect, useState } from "react";
import axios from "axios";

const News2 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=b36c2fed602c43eeb8b252376b099d38&category=sports"
      )
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilter(
      data.filter(
        (data) => {
          return data.title.toLowerCase().includes(search.toLowerCase());
        },
        [search, data]
      )
    );
  });
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      {filter.map((datas) => (
        <div>
          <h6 style={{ color: "black" }}>{datas.title}</h6>
        </div>
      ))}
    </div>
  );
};

export default News2;
