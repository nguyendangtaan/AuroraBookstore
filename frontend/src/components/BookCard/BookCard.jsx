import React from "react";
import { Card } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import "./BookCard.css";

export default function BookCard({ book }) {
  const handleImageClick = () => {
    console.log(1);
  };

  const handleTitleClick = (e) => {
    e.preventDefault();
    console.log(1);
  };
  return (
    <Card className="book-card">
      <div className="book-card-img-container" onClick={handleImageClick}>
        <Card.Img
          variant="top"
          src={book.image}
          alt="Book cover"
          className="book-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="book-card-title">
          <a href="#" onClick={handleTitleClick}>
            {book.title}
          </a>
        </Card.Title>
        <Card.Text className="book-card-author">{book.author}</Card.Text>
        <div className="book-card-rating">
          <GoComment className="comment-icon" />
          {book.totalReviews}
          <FaRegStar className="star-icon" /> {book.avgRating}
        </div>
        <div className="book-card-price">${book.price}</div>
      </Card.Body>
    </Card>
  );
}
