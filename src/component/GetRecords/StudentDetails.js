import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import GetStudents from "../Services/GetStudents";
import axios from "axios";

class StudentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    GetStudents.getStudentRecords().then((response) => {
      this.setState({ students: response.data });
    });
  }

  deleteRecord(studentId) {
    return axios
      .post(
        `http://localhost:8080/student-record/soft-delete-student-record/${studentId}`
      )
      .then((res) => {
        alert("Successfully Deleted!!!!");
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <h1 className={("my-10", "text-center")}>
          <b>Student Details</b>
        </h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Roll No.</th>
              <th>College Name</th>
              <th>Mobile No.</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.rollNo}</td>
                <td>{student.collegeName}</td>
                <td>{student.mobileNo}</td>
                <td>{student.emailId}</td>
                <td>
                  <Button
                    variant="primary"
                    href={`/addform/Student/${student.id}/?mode=update`}
                  >
                    Update
                  </Button>{" "}
                  <Button
                    variant="success"
                    href={`/addform/Student/${student.id}/?mode=view`}
                  >
                    View
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => this.deleteRecord(student.id)}
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
export default StudentDetails;
