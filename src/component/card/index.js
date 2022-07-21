import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function index({ title, Text1, Text2, button, category, variant }) {
  console.log(title);
  return (
    <div>
      <Card
        bg={variant}
        text="dark"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {Text1}
            {Text2}
          </Card.Text>
          <Link to={`/${category}`}>
            <Button variant="success">{button}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default index;
