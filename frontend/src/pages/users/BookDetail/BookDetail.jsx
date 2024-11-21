import { useState, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaRegStar } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import BookCard from "../../../components/BookCard/BookCard";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import reviewsData from "../../../data/reviewData";
import booksData from "../../../data/bookData";
import "./ProductInfo.css";
import "./BookDetail.css";

const book = {
  title: "Harry Potter and the Order of the Phoenix",
  author: "J.K. Rowling",
  image:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1480106986i/33917.jpg",
  avgRating: 4.5,
  totalReviews: 10,
  categories: ["Fantasy", "Adventure"],
  id: 1,
  pubYear: 2020,
  language: "English",
  page: 180,
  publisher: "Aiaasdgh",
  price: 208520,
  isAvailable: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco labors nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function BookDetail() {
  const [reviews, setReviews] = useState(reviewsData);

  const handleAddReview = (userName, content, rating) => {
    const newReview = {
      id: reviews.length + 1,
      user: { name: userName, avatar: "path/to/new-avatar.jpg" },
      content,
      rating,
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="product-page">
      {/* <ProductInfo selBook={book} /> */}

      <div className="product-info-container">
        <div className="product-info d-flex">
          <div className="product-image">
            <div className="book-image">
              <Image
                src={book.image}
                alt="Hình ảnh sách"
                className="custom-image"
                fluid
              />
            </div>
          </div>

          <div className="product-details flex-grow-1">
            <div className="book-introduction">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
            <div className="rating-info">
              <label className="rating-comment">
                <GoComment className="icon" />
                {book.totalReviews}
              </label>
              <label className="rating-comment">
                <FaRegStar className="icon" /> {book.avgRating}
              </label>
            </div>
            <div className="book-info">
              <div className="info-item">
                <strong>Category:</strong> {book.categories.join(", ")}
              </div>
              <div className="info-item">
                <strong>Publish Year:</strong>
                {book.pubYear}
              </div>
              <div className="info-item">
                <strong>Language:</strong>
                {book.language}
              </div>
              <div className="info-item">
                <strong>Page:</strong>
                {book.page}
              </div>
              <div className="info-item">
                <strong>Publisher:</strong>
                {book.publisher}
              </div>
            </div>

            <span id="book-price">{book.price}$</span>

            <div className="book-action d-flex gap-3 mt-3">
              <Button
                variant="outline-danger"
                id="btn-addToCart"
                disabled={!book.isAvailable}
              >
                ADD TO CART
              </Button>
              <Button
                variant="danger"
                id="btn-buy"
                disabled={!book.isAvailable}
              >
                BUY
              </Button>
            </div>
          </div>

          <div className="book-description">
            <h3>About</h3>
            <p>{book.description}</p>
          </div>
        </div>
        <ToastContainer />
      </div>

      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        <ReviewCard reviews={reviews} onAddReview={handleAddReview} />
      </div>

      <div className="related-products">
        <h2>YOU MAY ALSO LIKE</h2>
        <Container className="book-list-container">
          <Row className="book-list-row">
            {booksData.map((book) => (
              <Col
                key={book.id}
                xs={6} // 2 columns on extra small screens
                sm={6} // 2 columns on small screens
                md={6} // 3 columns on medium screens
                lg={6} // 4 columns on large screens
                xl={3} // 4 columns on extra large screens
                className="book-list-col"
              >
                <BookCard book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
