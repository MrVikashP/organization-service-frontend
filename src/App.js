import "./App.css";
import Record from "./component/records/index";
import Homepage from "./component/screen/homepage";
import Employee from "./component/form/employeeform";
import Student from "./component/form/studentform";
import StudentDetails from "./component/GetRecords/StudentDetails";
import EmployeeDetails from "./component/GetRecords/EmployeeDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/student">
            <Record Category={"student"} />
          </Route>
          <Route path="/employee">
            <Record Category={"employee"} />
          </Route>
          <Route path="/addform/Employee">
            <Employee />
          </Route>
          <Route path="/addform/Student">
            <Student />
          </Route>
          <Route path="/addform/Student/:id/?mode=update">
            <StudentDetails />
          </Route>
          <Route path="/addform/Student/:id/?mode=view">
            <StudentDetails />
          </Route>
          <Route path="/addform/Employee/:id/?mode=update">
            <EmployeeDetails />
          </Route>
          <Route path="/addform/Employee/:id/?mode=view">
            <EmployeeDetails />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
