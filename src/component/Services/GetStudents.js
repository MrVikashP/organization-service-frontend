import axios from "axios";

const Get_Student_Records_Api =
  "http://localhost:8080/student-record/get-all-student-record";

class GetStudents {
  getStudentRecords() {
    return axios.get(Get_Student_Records_Api);
  }
}

export default new GetStudents();
