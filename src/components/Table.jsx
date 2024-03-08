import { useState, useEffect } from "react";

import "../assets/table.scss";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async() => {
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=50", {
        method: 'GET'
      })
      const data = await res.json()
      console.log(data)
      setData(data.results)
    } catch (error) {
      console.error("There was an error loading data: ", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="table">
      <h2>Browse Questions</h2>
      {console.log(data)}
    </div>
  );
};

export default Table;
