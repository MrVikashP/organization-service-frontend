import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import GetEmployees from "../Services/GetEmployees";
import axios from "axios";

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  componentDidMount() {
    GetEmployees.getEmployeeRecords().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  deleteRecord(id) {
    return axios
      .post(
        `http://localhost:8080/employee-record/soft-delete-employee-record/${id}`
      )
      .then((res) => {
        alert("Successfully Deleted!!!");
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <h1 className={("my-10", "text-center")}>
          <b>EmployeeDetails</b>
        </h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Company Name</th>
              <th>Branch</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i+1}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.role}</td>
                <td>{employee.companyName}</td>
                <td>{employee.branch}</td>
                <td>{employee.salary}</td>
                <td>
                  <Button
                    variant="primary"
                    href={`/addform/Employee/${employee.id}/?mode=update`}
                  >
                    Update
                  </Button>{" "}
                  <Button
                    variant="success"
                    href={`/addform/Employee/${employee.id}/?mode=view`}
                  >
                    View
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => this.deleteRecord(employee.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default EmployeeDetails;
