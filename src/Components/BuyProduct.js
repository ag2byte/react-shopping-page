import { useState, useEffect } from "react";
// import { }
import Axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { commerce, random } from "faker";
import Product from "./Product";

const url = "https://api.pexels.com/v1/search?query=fruits&per_page=9&page=1";
const apikey = "INSERT_API_KEY_HERE";
const BuyProduct = ({ addToCart }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apikey,
      },
    });

    const { photos } = data;
    const allProducts = photos.map((photo) => ({
      medImage: photo.src.medium,
      largeImage: photo.src.large,
      tinyImage: photo.src.tiny,
      name: random.word(),
      price: commerce.price(),
      id: random.uuid(),
    }));
    setProduct(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <Row>
        {product.map((p) => (
          <Col md={4} key={p.id}>
            <Product item={p} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyProduct;
