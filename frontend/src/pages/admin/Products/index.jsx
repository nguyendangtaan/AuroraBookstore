import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
import intance from "../../../Axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const response = await intance.get(
        `/arrivalsbooks?_page=${page}&_limit=${itemsPerPage}`
      );
      setProducts(response.data);
      setTotalItems(parseInt(response.headers["x-total-count"], 10)); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //thêm sách
  const handleAddBookClick = () => {
    navigate("/admin/add-book"); // Điều hướng đến route AddBook
  };
  //xóa sách
  const handleDelete = async (id) => {
    if (window.confirm("Bạn có muốn xóa sách này không?")) {
      try {
       
        await intance.delete(`/arrivalsbooks/${id}`);
      
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.BID !== id)
        );
        alert("Đã xóa sách thành công.");
      } catch (error) {
        console.error("Error deleting book:", error);
        alert("Failed to delete the book. Please try again.");
      }
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="products-container">
    <div className="header-products">
      <h1>Book Management</h1>
      <Button className="add-book" onClick={handleAddBookClick}>Add Book</Button>
    </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Language</th>
            <th>Page quantity</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.BID}>
            <td>
        <div style={{ display: "flex", alignItems: "center" }}>
        
          <img
            src={product.URL}
            alt={product.BNAME}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
     
          <div>
            {product.BNAME}
            <br />
            <span className="isbn">ISBN: {product.ISBN}</span>
          </div>
        </div>
      </td>
              <td>{product.AUTHOR}</td>
              <td>{product.LANGUAGE}</td> 
              <td>{product.PAGE}</td>
              <td>{product.PRICE}</td>
              <td>
                <Button className="btn-edit"  as={Link} to={`/admin/edit-book/${product.BID}`}>Edit</Button>
                <Button className="text-danger btn-delete" onClick={()=>handleDelete(product.BID)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination">
        <span>
          {products.length} of {totalItems} Books
        </span>
        <div>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              variant={currentPage === index + 1 ? "primary" : "link"}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;

