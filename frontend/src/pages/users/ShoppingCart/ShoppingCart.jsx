import React, { useState } from "react";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../../../components/CartItem/CartItem";
import { FaShoppingCart } from "react-icons/fa";

import "./ShoppingCart.css";

const ShoppingCart = () => {
  // Dữ liệu mẫu cho cartItems
  const initialCartItems = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      price: 19.99,
      quantity: 1,
      image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 14.99,
      quantity: 1,
      image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 14.99,
      quantity: 1,
      image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };


  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <Container className="shopping-cart-page">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>It looks like you haven't added any items to your cart yet.</p>
          <Link to="/" className="btn btn-primary btn-home">
            Back to Home
          </Link>
        </div>
      </Container>
    );
  }

  // Tính tổng giá tiền
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container className="shopping-cart-page">
      {/* Khu vực chứa các CartItem */}
      <div className="cart-items-list">
        <h2 className="heading-cart-title">
          <FaShoppingCart className="cart-icon" />
          Shopping Cart
        </h2>
        <ListGroup>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              quantity={item.quantity}
              onRemove={handleRemove}
              updateQuantity={updateQuantity}
            />
          ))}
        </ListGroup>
      </div>

      {/* Khu vực chứa thông tin tổng giá tiền và nút thanh toán */}
      <div className="shopping-cart-summary-section">
        <Card className="summary-card">
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item className="total-price-item">
                <h5 className="total-price">
                  <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                </h5>
              </ListGroup.Item>
            </ListGroup>

            <div className="shopping-cart-button-group">
              <Link to="/" className="btn btn-primary btn-home">
                Continue Shopping
              </Link>
              <Button
                variant="success"
                className="btn-checkout"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ShoppingCart;
