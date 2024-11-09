// Shop.js
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import "../styles/ShopStyle.css"; // Custom styling for Shop page

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "High-quality product.",
    price: "$10",
    image: "path-to-product-image1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Best-selling product.",
    price: "$20",
    image: "path-to-product-image2",
  },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h1 className="text-center mb-4">Shop Our Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={6} lg={4} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="price">{product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
