import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = ({ products, removeFromCart, buyNow }) => {
  let total = 0;
  products.forEach((p) => {
    total = parseFloat(total) + parseFloat(p.price);
  });
  return (
    <Container fluid>
      <ListGroup>
        {products.map((p) => (
          <ListGroupItem key={p.id}>
            <Row>
              <Col>
                <img height={80} src={p.tinyImage} />
              </Col>
              <Col className="text-center">
                <span>{p.name}</span>
                <span> Price: {p.price}</span>
              </Col>
              <Button outline color="info" onClick={() => removeFromCart(p)}>
                <AiOutlineDelete></AiOutlineDelete>
              </Button>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {products.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardBody>TOTAL:{total}</CardBody>
        </Card>
      ) : (
        <Card className="text-center mt-3">
          <CardBody>Your cart is empty</CardBody>
        </Card>
      )}
    </Container>
  );
};
export default Cart;
