import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft, FaSort } from "react-icons/fa6";

import "../assets/table.scss";

const Table = () => {
  const [data, setData] = useState([]);
  const [tablePage, setTablePage] = useState(1);
  const [pages, setPages] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=50&encode=url3986",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setData(
        data.results.map((elm, index) => ({
          id: index + 1,
          ...elm,
        }))
      );
      setPages(Math.ceil(data.results.length / 10));
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
        <>
          <table>
            <thead>
              <tr>
                <th className="table__id">
                  <span>ID</span>{" "}
                  <FaSort onClick={() => setData([...data].reverse())} />
                </th>
                <th className="text-left">Category</th>
                <th className="text-left">Type</th>
                <th>Difficulty</th>
                <th className="text-left">Question / Statement</th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice((tablePage - 1) * 10, (tablePage - 1) * 10 + 10)
                .map((elm, index) => (
                  <tr key={index}>
                    <td className="text-center">{elm.id}</td>
                    <td>{decodeURIComponent(elm.category)}</td>
                    <td>
                      {formatType(
                        capitalizeString(decodeURIComponent(elm.type))
                      )}
                    </td>
                    <td>
                      {capitalizeString(decodeURIComponent(elm.difficulty))}
                    </td>
                    <td>{decodeURIComponent(elm.question)}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          {pages > 0 && (
            <div className="table__pagination">
              <div>
                {tablePage > 1 && (
                  <span onClick={() => setTablePage(tablePage - 1)}>
                    <FaAngleLeft />
                  </span>
                )}
                {Array.from({ length: pages }, (_, index) => index + 1).map(
                  (elm, index) => (
                    <span
                      key={index}
                      className={
                        tablePage === elm ? "table__pagination--selected" : ""
                      }
                      onClick={() => setTablePage(elm)}
                    >
                      {elm}
                    </span>
                  )
                )}
                {tablePage < pages && (
                  <span onClick={() => setTablePage(tablePage + 1)}>
                    <FaAngleRight />
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Table;
