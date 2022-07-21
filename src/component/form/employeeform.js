import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const createEmployee =
  "http://localhost:8080/employee-record/create-employee-record";

function Employeeform() {
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeName: "",
    role: "",
    companyName: "",
    mobileNumber: "",
    emailId: "",
    branch: "",
    salary: "",
  });

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  var id = window.location.pathname
    .replace("/addform/Employee/", "")
    .replace("/", "");

  useEffect(() => {
    const mode = query.get("mode");
    mode === "update" &&
      axios
        .get(`http://localhost:8080/employee-record/get-employee-record/${id}`)
        .then((res) => res?.data && setEmployeeDetails(res.data))
        .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const mode = query.get("mode");
    mode === "view" &&
      axios
        .get(`http://localhost:8080/employee-record/get-employee-record/${id}`)
        .then((res) => res?.data && setEmployeeDetails(res.data))
        .catch((err) => console.log(err));
  }, [id]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true && query.get("mode") === "update") {
      axios
        .post(
          `http://localhost:8080/employee-record/update-employee-record/${id}`,
          employeeDetails
        )
        .then((res) => alert("Details has been updated successfully!!!"))
        .catch((Error) => console.log(Error));
        event.preventDefault();
      return
    }
    if (form.checkValidity() === true) {
      axios
        .post(createEmployee, employeeDetails)
        .then((res) => alert("Created New Employee"))
        .catch((Error) => console.log(Error));
        event.preventDefault();
    }
    
    setValidated(true);
  };

  const onChangeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setEmployeeDetails({ ...employeeDetails, [key]: value });
  };

  return (
    <div>
      <Navbar Category={"employee"} />

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "120vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          className="mb-8"
          style={{
            borderRadius: "10px",
            width: "60%",
            marginBottom: 293,
            borderBlock: "4px solid grey",
          }}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          method="post"
        >
          {query.get("mode") === "update" ? (
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              <b>Update Employee</b>
            </h3>
          ) : query.get("mode") === "view" ? (
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              <b>Employee Details</b>
            </h3>
          ) : (
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              <b>Add New Employee</b>
            </h3>
          )}
          <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
            <Form.Label column sm={2}>
              Employee Name
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="text"
                  placeholder="Employee Name"
                  disabled
                  name="employeeName"
                  value={employeeDetails.employeeName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="text"
                  placeholder="Employee Name"
                  name="employeeName"
                  value={employeeDetails.employeeName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom02">
            <Form.Label column sm={2}>
              Role
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="text"
                  placeholder="Role"
                  disabled
                  name="role"
                  value={employeeDetails.role}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="text"
                  placeholder="Role"
                  name="role"
                  value={employeeDetails.role}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom03">
            <Form.Label column sm={2}>
              Company Name
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="text"
                  placeholder="Company Name"
                  disabled
                  name="companyName"
                  value={employeeDetails.companyName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  value={employeeDetails.companyName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom04">
            <Form.Label column sm={2}>
              Mobile Number
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="number"
                  placeholder="Mobile Number"
                  disabled
                  name="mobileNumber"
                  value={employeeDetails.mobileNumber}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="number"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={employeeDetails.mobileNumber}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom05">
            <Form.Label column sm={2}>
              Email Id
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Id"
                  disabled
                  name="emailId"
                  value={employeeDetails.emailId}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Id"
                  name="emailId"
                  value={employeeDetails.emailId}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom06">
            <Form.Label column sm={2}>
              Branch
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="text"
                  placeholder="Branch"
                  disabled
                  name="branch"
                  value={employeeDetails.branch}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="text"
                  placeholder="Branch"
                  name="branch"
                  value={employeeDetails.branch}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom07">
            <Form.Label column sm={2}>
              Salary
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="number"
                  placeholder="Salary"
                  disabled
                  name="salary"
                  value={employeeDetails.salary}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="number"
                  placeholder="Salary"
                  name="salary"
                  value={employeeDetails.salary}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          {query.get("mode") === "view" ? (
            <Button variant="danger" type="cancel" href="/employee">
              Cancel
            </Button>
          ) : query.get("mode") === "update" ? (
            <div>
              <Button variant="success" type="submit">
                Submit
              </Button>{" "}
              <Button variant="danger" type="cancel" href="/employee">
                Cancel
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <Button variant="success" type="submit">
                Submit
              </Button>{" "}
              <Button variant="danger" type="cancel" href="/employee">
                Cancel
              </Button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Employeeform;
