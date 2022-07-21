import React from "react";
import Navbar from "../Navbar";
import StudentDetails from "../GetRecords/StudentDetails";
import EmployeeDetails from "../GetRecords/EmployeeDetails";
function index({ Category }) {
  return (
    <div>
      <Navbar Category={Category} />
      <div>
        {Category === "student" ? <StudentDetails /> : <EmployeeDetails />}
      </div>
    </div>
  );
}

export default index;
