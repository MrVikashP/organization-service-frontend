import React from "react";
import "../../App.css";
import Card from "../card";
function homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <b>Welcome To Organisation</b>
        </h1>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <div style={{ marginRight: 6 }}>
            <Card
              title={<b>Student</b>}
              category={"student"}
              Text1={"For Management of Student Details"}
              button={"Show Up"}
              variant={"primary"}
            />
          </div>

          <Card
            title={<b>Employee</b>}
            category={"employee"}
            Text2={"For Management of Employee Details"}
            button={"Show Up"}
            variant={"danger"}
          />
        </div>
      </header>
    </div>
  );
}

export default homepage;
