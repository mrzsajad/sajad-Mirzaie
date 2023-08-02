import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Test from "./components/Test";
import Purchase from "./components/Purchase/Purchase";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
