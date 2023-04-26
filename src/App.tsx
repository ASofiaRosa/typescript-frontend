import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/Overview";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
