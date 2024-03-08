import { useState, useEffect } from "react";

import "../assets/table.scss";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=50", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setData(data.results);
    } catch (error) {
      console.error("There was an error loading data: ", error);
    }
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
              <th>ID</th>
              <th>Category</th>
              <th>Type</th>
              <th>Difficulty</th>
              <th>Question / Statement</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elm, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{elm.category}</td>
                <td>{elm.type}</td>
                <td>{elm.difficulty}</td>
                <td>{elm.question}</td>
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
