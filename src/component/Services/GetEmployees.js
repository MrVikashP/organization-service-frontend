import axios from "axios";

const Get_Employee_Records_Api =
  "http://localhost:8080/employee-record/get-all-employee-records";

class GetEmployees {
  getEmployeeRecords() {
    return axios.get(Get_Employee_Records_Api);
  }
}

export default new GetEmployees();
