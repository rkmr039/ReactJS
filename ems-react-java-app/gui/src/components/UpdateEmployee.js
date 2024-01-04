import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {
  const navigate = useNavigate();
  const params = useParams();
  const restrictReRender = useRef(true);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const employeeId = params.id;

  useEffect(() => {
    if (restrictReRender.current) {
      restrictReRender.current = false;
      console.log(employeeId);
      EmployeeService.getEmployeeById(employeeId).then((res) => {
        console.log(res);
        let emp = res.data;
        setEmployee({ ...emp });
      });
    }
  }, [employeeId]);

  const handleChange = (e) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSave = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
      id: employeeId,
    };
    console.log("Update Employee ====> ", JSON.stringify(newEmployee));
    EmployeeService.createEmployee(newEmployee).then((res) => {
      navigate("/");
    });
  };
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h1 className="text-center">Update Employee</h1>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={(event) => handleChange(event)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={(event) => handleChange(event)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    placeholder="Email ID"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={(event) => handleChange(event)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => handleSave(e)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleClose()}
                  style={{ marginLeft: "10px" }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;
