import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import "./AddBook.css";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    BNAME: "",
    ISBN: "",
    AUTHOR: "",
    LANGUAGE: "",
    PUBYEAR: "",
    DESCRIPTION: "",
    URL: "",
    PAGE: "",
    GENRES: "",
    PRICE: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };
  const handleBack=()=>{
    navigate('/admin/products');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!bookData.BNAME || !bookData.ISBN || !bookData.AUTHOR) {
      alert("Vui lòng nhập đầy đủ thông tin sách.");
      return;
    }

    try {
     
      await axios.post("http://localhost:3004/arrivalsbooks", bookData);
      alert("Thêm sách thành công!");

      // Reset form
      setBookData({
        BNAME: "",
        ISBN: "",
        AUTHOR: "",
        LANGUAGE: "",
        PUBYEAR: "",
        DESCRIPTION: "",
        URL: "",
        PAGE: "",
        GENRES: "",
        PRICE: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again.");
    }
  };

  return (
    <div className="add-book-container">
      <h1>Add Book</h1>
      <Form onSubmit={handleSubmit}>
        <h3>Book Information</h3>
        <Row>
          <Col md={6}>
            <Form.Group controlId="BNAME">
              <Form.Label>Book Name</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="text"
                placeholder="Enter book name"
                name="BNAME"
                value={bookData.BNAME}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="GENRES">
              <Form.Label>Genres</Form.Label>
              <Form.Control
                as="select"
                name="GENRES"
                 className="input-infor-book"
                value={bookData.GENRES}
                onChange={handleChange}
              >
                <option value="">Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-fiction">Non-fiction</option>
                <option value="Romance">Romance</option>
                <option value="Science">Science</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="ISBN">
              <Form.Label>ISBN</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="text"
                placeholder="Enter ISBN"
                name="ISBN"
                value={bookData.ISBN}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="AUTHOR">
              <Form.Label>Author</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="text"
                placeholder="Enter author"
                name="AUTHOR"
                value={bookData.AUTHOR}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="PUBYEAR">
              <Form.Label>Release Year</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="number"
                placeholder="Enter release year"
                name="PUBYEAR"
                value={bookData.PUBYEAR}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="LANGUAGE">
              <Form.Label>Language</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="text"
                placeholder="Enter language"
                name="LANGUAGE"
                value={bookData.LANGUAGE}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="PRICE">
              <Form.Label>Price</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="number"
                placeholder="Enter price"
                name="PRICE"
                value={bookData.PRICE}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="PAGE">
              <Form.Label>Page Quantity</Form.Label>
              <Form.Control 
              className="input-infor-book"
                type="number"
                placeholder="Enter page quantity"
                name="PAGE"
                value={bookData.PAGE}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="DESCRIPTION">
          <Form.Label>Description</Form.Label>
          <Form.Control 
          className="input-infor-book"
            as="textarea"
            rows={3}
            placeholder="Enter book description"
            name="DESCRIPTION"
            value={bookData.DESCRIPTION}
            onChange={handleChange}
          />
        </Form.Group>

        <h3>Book Image</h3>
        <Form.Group controlId="URL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control 
          className="input-infor-book"
            type="text"
            placeholder="Enter photo URL"
            name="URL"
            value={bookData.URL}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="form-actions">
          <Button variant="secondary" onClick={handleBack} type="button" style={{ backgroundColor:"#f44336",color:"#fff"}}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" style={{ backgroundColor:"#4CAF50",color:"#fff"}}>
            Addbook
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBook;
