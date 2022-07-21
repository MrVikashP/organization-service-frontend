import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Navbarr({Category}) {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >Organisation Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <b>Home</b>
            </Nav.Link>
            {Category !== "student" ? (
              <Nav.Link href="/addform/Employee">
                <b>Add Employee</b>
              </Nav.Link>
            ) : (
              <Nav.Link href="/addform/Student">
                <b>Add Student</b>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbarr