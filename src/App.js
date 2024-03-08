import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header />
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
}

export default App;
