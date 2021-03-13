import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "reactstrap";
import "./App.css";

import BuyProduct from "./Components/BuyProduct";
import Cart from "./Components/Cart";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    //verify if item alreeady exists in the cart
    const isExisting = cart.findIndex((array) => array.id === item.id);
    if (isExisting !== -1) {
      //exists
      console.log(item, "added");
      toast.warning("❕ Item already exists", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log(item, "added");
      toast.info("🛒 updated", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setCart([...cart, item]);
    }
  };

  // we dont have buy now so far

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
    toast.dark(`${item.name} removed`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container fluid className="ml-4  mt-5">
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyProduct addToCart={addToCart} />
        </Col>
        <Col md="4">
          <Cart products={cart} removeFromCart={removeFromCart} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
