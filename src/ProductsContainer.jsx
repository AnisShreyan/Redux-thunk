import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductsContainer(props) {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.category}</Card.Text>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <h2>{props.price}</h2>
          <strong>{props.rating.rate}/5</strong> ({props.rating.count})
        </Card.Text>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsContainer;
