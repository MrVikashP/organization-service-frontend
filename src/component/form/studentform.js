import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
const addNewStudent =
  "http://localhost:8080/student-record/create-student-record";

function Studentform() {
  const [studentDetails, setStudentDetails] = useState({
    studentName: "",
    rollNo: "",
    collegeName: "",
    mobileNo: "",
    emailId: "",
  });

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  var id = window.location.pathname
    .replace("/addform/Student/", "")
    .replace("/", "");
  useEffect(() => {
    const mode = query.get("mode");
    console.log(id);
    mode === "update" &&
      axios
        .get(`http://localhost:8080/student-record/get-student-records/${id}`)
        .then((res) => res?.data && setStudentDetails(res.data))
        .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    const mode = query.get("mode");
    console.log(id);
    mode === "view" &&
      axios
        .get(`http://localhost:8080/student-record/get-student-records/${id}`)
        .then((res) => res?.data && setStudentDetails(res.data))
        .catch((err) => console.log(err));
  }, [id]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true && query.get("mode") === "update") {
      axios
        .post(
          `http://localhost:8080/student-record/update-student-record/${id}`,
          studentDetails
        )
        .then((res) => alert("Details has been updated successfully!!!"))
        .catch((Error) => console.log(Error));
      event.preventDefault();
      return;
    }
    if (form.checkValidity() === true) {
      axios
        .post(addNewStudent, studentDetails)
        .then((res) => alert("Created New Student"))
        .catch((Error) => console.log(Error));
      event.preventDefault();
      return;
    }
    event.preventDefault();
    setValidated(true);
  };
  const onChangeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setStudentDetails({ ...studentDetails, [key]: value });
  };

  return (
    <div>
      <Navbar Category={"student"} />

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "110vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          className="mb-8"
          style={{
            borderRadius: "10px",
            width: "50%",
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
              <b>Update Student</b>
            </h3>
          ) : query.get("mode") === "view" ? (
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              <b>Student Details</b>
            </h3>
          ) : (
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              <b>Add New Student</b>
            </h3>
          )}
          <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
            <Form.Label column sm={2}>
              Student Name
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="text"
                  placeholder="Student Name"
                  disabled
                  name="studentName"
                  value={studentDetails.studentName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="text"
                  placeholder="Student Name"
                  name="studentName"
                  value={studentDetails.studentName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom02">
            <Form.Label column sm={2}>
              Roll No
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="number"
                  placeholder="Roll No"
                  disabled
                  name="rollNo"
                  value={studentDetails.rollNo}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="number"
                  placeholder="Roll No"
                  name="rollNo"
                  value={studentDetails.rollNo}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom03">
            <Form.Label column sm={2}>
              College Name
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="text"
                  placeholder="College Name"
                  disabled
                  name="collegeName"
                  value={studentDetails.collegeName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="text"
                  placeholder="College Name"
                  name="collegeName"
                  value={studentDetails.collegeName}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="validationCustom04">
            <Form.Label column sm={2}>
              Mobile No
            </Form.Label>
            <Col sm={5}>
              {query.get("mode") === "view" ? (
                <Form.Control
                  required
                  type="number"
                  placeholder="Mobile No"
                  disabled
                  name="mobileNo"
                  value={studentDetails.mobileNo}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              ) : (
                <Form.Control
                  required
                  type="number"
                  placeholder="Mobile No"
                  name="mobileNo"
                  value={studentDetails.mobileNo}
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
                  value={studentDetails.emailId}
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
                  value={studentDetails.emailId}
                  onChange={(event) => {
                    onChangeHandler(event);
                  }}
                />
              )}
            </Col>
          </Form.Group>
          {query.get("mode") === "view" ? (
            <Button variant="danger" type="cancel" href="/student">
              Cancel
            </Button>
          ) : query.get("mode") === "update" ? (
            <div>
              <Button variant="success" type="submit">
                Submit
              </Button>{" "}
              <Button variant="danger" type="cancel" href="/student">
                Cancel
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <Button variant="success" type="submit">
                Submit
              </Button>{" "}
              <Button variant="danger" type="cancel" href="/student">
                Cancel
              </Button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Studentform;
