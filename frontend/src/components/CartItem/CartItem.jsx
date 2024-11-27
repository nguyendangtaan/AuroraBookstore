import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, quantity, onRemove, updateQuantity }) => {
  const handleIncrease = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div className="cart-item-details">
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div>
            <h5>
              <Link to={`/book/${item.id}`} className="book-item-title">
                {item.title}
              </Link>
            </h5>
            <p className="book-item-detail">{item.author}</p>
            <p className="book-item-detail">${item.price}</p>
          </div>
        </div>
        <div className="cart-item-actions">
          <div className="cart-item-quantity">
            <Button variant="outline-secondary" onClick={handleDecrease}>
              -
            </Button>
            <span className="quantity">{quantity}</span>
            <Button variant="outline-secondary" onClick={handleIncrease}>
              +
            </Button>
          </div>
          <div className="cart-item-remove">
            <Button
              variant="danger"
              className="btn-delete-cart-item"
              onClick={() => onRemove(item.id)}
            >
              <FaTrash className="icon-trash" />
            </Button>
          </div>
        </div>
      </ListGroup.Item>

      <hr className="cart-item-divider" />
    </>
  );
};

export default CartItem;
