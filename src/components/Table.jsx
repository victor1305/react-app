import { useState, useEffect } from "react";

import "../assets/table.scss";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=50&encode=url3986",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setData(data.results);
    } catch (error) {
      console.error("There was an error loading data: ", error);
    }
  };

  const formatType = (str) =>
    str === "Multiple" ? "Multiple Choice" : "True / False";

  const capitalizeString = (str) => {
    if (!str || typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table">
      <h2>Browse Questions</h2>
      {data?.length ? (
        <table>
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-left">Category</th>
              <th className="text-left">Type</th>
              <th>Difficulty</th>
              <th className="text-left">Question / Statement</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elm, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td>{decodeURIComponent(elm.category)}</td>
                <td>
                  {formatType(capitalizeString(decodeURIComponent(elm.type)))}
                </td>
                <td>{capitalizeString(decodeURIComponent(elm.difficulty))}</td>
                <td>{decodeURIComponent(elm.question)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Table;
