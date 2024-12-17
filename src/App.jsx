import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-100 font-sans">
      <Router>
        <Navbar />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
