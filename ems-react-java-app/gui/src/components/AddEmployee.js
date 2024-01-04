import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const employeeId = params.id || 0;

  const restrictReRender = useRef(true);

  useEffect(() => {
    if (restrictReRender.current) {
      restrictReRender.current = false;
      if (employeeId > 0) {
        console.log("Fetching employee details for id : ", employeeId);
        EmployeeService.getEmployeeById(employeeId).then((res) => {
          let employee = res.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmailId(employee.emailId);
        });
      }
    }
  }, [employeeId]);

  const handleSave = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      id: employeeId ? employeeId : 0,
    };
    console.log("Add/Update Employee ====> ", JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
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
            <h1 className="text-center">Add Employee</h1>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    placeholder="Email ID"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(event) => setEmailId(event.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => handleSave(e)}
                >
                  Save
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

export default AddEmployee;
