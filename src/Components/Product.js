import React from "react";
// import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardImg,
  Button,
  CardText,
  CardTitle,
} from "reactstrap";

const Product = ({ item, addToCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={item.medImage}></CardImg>
      <CardBody className="text-center">
        <CardTitle>{item.name}</CardTitle>
        <CardText className="secondary">Price: {item.price}</CardText>
        <Button color="info" onClick={() => addToCart(item)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};
export default Product;
