import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./ReviewCard.css";

export default function ReviewCard({ reviews, onAddReview }) {
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState("");
  const [visibleReviews, setVisibleReviews] = useState(2); // State để quản lý số lượng bình luận hiển thị

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() && rating > 0 && userName.trim()) {
      onAddReview(userName, newReview, rating);
      setNewReview("");
      setRating(0);
      setUserName("");
    }
  };

  const handleSeeMore = () => {
    setVisibleReviews(reviews.length); // Hiển thị toàn bộ bình luận
  };

  return (
    <div className="review-card">
      {/* Form gửi đánh giá */}
      <div className="review-form">
        <Image
          src="/img/avatars/fm1.png"
          roundedCircle
          width={48}
          height={48}
        />
        <Form onSubmit={handleSubmit} className="review-form-content">
          <Form.Group controlId="userName">
            <Form.Control
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Tên của bạn"
            />
          </Form.Group>
          <Form.Group controlId="review">
            <Form.Control
              as="textarea"
              rows={3}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Viết đánh giá của bạn..."
              className="custom-textarea"
            />
          </Form.Group>
          <div className="review-form-footer">
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`star ${index < rating ? "selected" : ""}`}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </div>
            <Button className="btn-add-review" variant="primary" type="submit">
              ADD REVIEW
            </Button>
          </div>
        </Form>
      </div>

      {/* Danh sách reviews */}
      <ul className="review-list">
        {reviews.slice(0, visibleReviews).map((review) => (
          <li key={review.id} className="review-item">
            <Image
              src={review.user.avatar}
              roundedCircle
              width={32}
              height={32}
              className="review-avatar"
            />
            <div className="review-content">
              <div className="review-header">
                <span className="review-date">{review.date}</span>
                <div className="review-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`star ${
                        index < review.rating ? "selected" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="review-text">{review.content}</p>
              <p className="review-user-name">- {review.user.name}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="see-more">
        {/* Nút "See more comments" */}
        {visibleReviews < reviews.length && (
          <Button
            style={{ color: "#942446" }}
            variant="link"
            onClick={handleSeeMore}
          >
            See more comments
          </Button>
        )}
      </div>
    </div>
  );
}
