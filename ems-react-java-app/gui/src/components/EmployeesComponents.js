import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeesComponents = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      EmployeeService.getEmployees().then((res) => {
        setEmployees(res.data);
      });
    }
    return () => {
      isCancelled = true;
      console.log("canceled");
    };
  }, []);

  function addEmployee() {
    navigate("/add");
  }

  function updateEmployee(id) {
    navigate(`/update/${id}`);
  }
  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={() => addEmployee()}>
          Add
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee EmailId</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => updateEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesComponents;
