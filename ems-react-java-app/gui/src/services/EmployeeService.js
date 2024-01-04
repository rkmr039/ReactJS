import axios from "axios";

const EMS_BASE_API_URL = "http://localhost:8080/ems/employee/";

class EmployeeService {
  getEmployees() {
    return axios.get(EMS_BASE_API_URL + "getAll");
  }

  getEmployeeById(id) {
    console.log(EMS_BASE_API_URL + "getById/" + id);
    return axios.get(EMS_BASE_API_URL + "getById/" + id);
  }

  createEmployee(employee) {
    return axios.post(EMS_BASE_API_URL + "addEmployee", employee);
  }
}

export default new EmployeeService();
