import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeesComponents from "./components/EmployeesComponents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeesComponents />} />
            <Route
              path="/ems/employee/getAll"
              element={<EmployeesComponents />}
            />
            <Route path="/home" element={<EmployeesComponents />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/update/:id" element={<UpdateEmployee />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
