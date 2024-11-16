import React, { memo, useState,useEffect } from "react";
import { Row, Col, Card, Form, Button, Pagination, Container } from "react-bootstrap";
import "./Catalog.scss";


 
  

const Catalog = () => {
 
  const fakeBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", language: "English", price: 15, coverImage: "https://via.placeholder.com/150" },
    { id: 2, title: "War and Peace", author: "Leo Tolstoy", category: "Historical", language: "Russian", price: 20, coverImage: "https://via.placeholder.com/150" },
    { id: 3, title: "Business 101", author: "John Doe", category: "Business", language: "English", price: 25, coverImage: "https://via.placeholder.com/150" },
    { id: 4, title: "Learning React", author: "Dan Abramov", category: "Educational", language: "English", price: 30, coverImage: "https://via.placeholder.com/150" },
      { id: 5, title: "1984", author: "George Orwell", category: "Fiction", language: "English", price: 18, coverImage: "https://via.placeholder.com/150" },
      { id: 6, title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", language: "English", price: 12, coverImage: "https://via.placeholder.com/150" },
      { id: 7, title: "The Alchemist", author: "Paulo Coelho", category: "Philosophy", language: "Portuguese", price: 16, coverImage: "https://via.placeholder.com/150" },
      { id: 8, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", language: "English", price: 22, coverImage: "https://via.placeholder.com/150" },
      { id: 9, title: "The Art of War", author: "Sun Tzu", category: "Philosophy", language: "Chinese", price: 14, coverImage: "https://via.placeholder.com/150" },
      { id: 10, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", language: "English", price: 19, coverImage: "https://via.placeholder.com/150" },
      { id: 11, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", language: "English", price: 17, coverImage: "https://via.placeholder.com/150" },
      { id: 12, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", language: "English", price: 20, coverImage: "https://via.placeholder.com/150" },
      { id: 13, title: "Inferno", author: "Dan Brown", category: "Thriller", language: "English", price: 24, coverImage: "https://via.placeholder.com/150" },
      { id: 14, title: "The Kite Runner", author: "Khaled Hosseini", category: "Drama", language: "English", price: 18, coverImage: "https://via.placeholder.com/150" },
      { id: 15, title: "Becoming", author: "Michelle Obama", category: "Biography", language: "English", price: 25, coverImage: "https://via.placeholder.com/150" },
      { id: 16, title: "Steve Jobs", author: "Walter Isaacson", category: "Biography", language: "English", price: 30, coverImage: "https://via.placeholder.com/150" },
      { id: 17, title: "The Silent Patient", author: "Alex Michaelides", category: "Mystery", language: "English", price: 23, coverImage: "https://via.placeholder.com/150" },
      { id: 18, title: "Dune", author: "Frank Herbert", category: "Science Fiction", language: "English", price: 27, coverImage: "https://via.placeholder.com/150" },
      { id: 19, title: "The Road", author: "Cormac McCarthy", category: "Fiction", language: "English", price: 21, coverImage: "https://via.placeholder.com/150" },
      { id: 20, title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", language: "Latin", price: 15, coverImage: "https://via.placeholder.com/150" },
      { id: 21, title: "The Power of Habit", author: "Charles Duhigg", category: "Self-help", language: "English", price: 19, coverImage: "https://via.placeholder.com/150" },
      { id: 22, title: "The Shining", author: "Stephen King", category: "Horror", language: "English", price: 22, coverImage: "https://via.placeholder.com/150" },
      { id: 23, title: "Gone Girl", author: "Gillian Flynn", category: "Thriller", language: "English", price: 20, coverImage: "https://via.placeholder.com/150" },
      { id: 24, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self-help", language: "English", price: 18, coverImage: "https://via.placeholder.com/150" },
      { id: 25, title: "Atomic Habits", author: "James Clear", category: "Self-help", language: "English", price: 22, coverImage: "https://via.placeholder.com/150" },
      { id: 26, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Business", language: "English", price: 21, coverImage: "https://via.placeholder.com/150" },
      { id: 27, title: "The Lean Startup", author: "Eric Ries", category: "Business", language: "English", price: 23, coverImage: "https://via.placeholder.com/150" },
      { id: 28, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", language: "English", price: 18, coverImage: "https://via.placeholder.com/150" },
      { id: 29, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", language: "English", price: 26, coverImage: "https://via.placeholder.com/150" },
      { id: 30, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", language: "English", price: 28, coverImage: "https://via.placeholder.com/150" }
  
    
  ];
  
  const [books, setBooks] = useState(fakeBooks);
  
  const [searchText, setSearchText] = useState("");

  const [filteredBooks, setFilteredBooks] = useState(fakeBooks);

  const [filters, setFilters] = useState({
    category: [],
    language: [],
    author: "",
    priceRange: { min: "", max: "" },
  });
  //phân trang
  const [currentPage, setCurrentPage] = useState(1); 
  const booksPerPage = 12; 
  const indexOfLastBook = currentPage * booksPerPage; 
  const indexOfFirstBook = indexOfLastBook - booksPerPage; 
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook); 
  //
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() === "") {
        setFilteredBooks(books); 
      } else {
        const filtered = books.filter((book) =>
          book.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredBooks(filtered);
      }
    }, 300); 
  
    return () => clearTimeout(timer); 
  }, [searchText, books]);

  const applyFilters = () => {
    const { category, language, author, priceRange } = filters;

    const filtered = books.filter((book) => {
      const categoryMatch = category.length ? category.includes(book.category) : true;
      const languageMatch = language.length ? language.includes(book.language) : true;
      const authorMatch = author ? book.author.toLowerCase().includes(author.toLowerCase()) : true;
      const priceMatch =
        (priceRange.min === "" || book.price >= Number(priceRange.min)) &&
        (priceRange.max === "" || book.price <= Number(priceRange.max));
        const searchMatch = searchText ? book.title.toLowerCase().includes(searchText.toLowerCase()) : true;

      return categoryMatch && languageMatch && authorMatch && priceMatch && searchMatch;
    });

    setFilteredBooks(filtered);
  };
  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      if (type === "category" || type === "language") {
        const isSelected = prev[type].includes(value);
        return {
          ...prev,
          [type]: isSelected ? prev[type].filter((item) => item !== value) : [...prev[type], value],
        };
      }
      if (type === "author") {
        return { ...prev, author: value };
      }
      if (type === "priceRange") {
        return { ...prev, priceRange: { ...prev.priceRange, ...value } };
      }
      return prev;
    });
  };

  return (
    <Container fluid  className="catalog-page">
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} className="Sidebar bg-light ">
          <div className="logo mb-4 mt-4">
            <h2>Books</h2>
          </div>
          <div className="filter-section">
            <h2>Filter</h2>
            <p>{filteredBooks.length} results</p>

            <div className="filter-tags mb-4">
              {filters.language.map((lang) => (
                <span key={lang} className="badge bg-secondary  me-2">
                  {lang}
                </span>
              ))}
            </div>

            <div className="filter-options mb-4">
              <h3>Categories</h3>
              {["Fiction", "Business", "Educational"].map((category) => (
                <Form.Check
                  key={category}
                  label={category}
                  onChange={() => handleFilterChange("category", category)}
                />
              ))}
            </div>

            <div className="filter-options mb-4">
              <h3>Language</h3>
              {["English", "Russian"].map((language) => (
                <Form.Check
                  key={language}
                  label={language}
                  onChange={() => handleFilterChange("language", language)}
                />
              ))}
            </div>

            <div className="filter-options mb-4">
              <h3>Author</h3>
              <Form.Control
                type="text"
                placeholder="Find Author"
                onChange={(e) => handleFilterChange("author", e.target.value)}
              />
            </div>

            <div className="filter-price mb-4">
              <h3>Price</h3>
              <div className="d-flex gap-2">
                <Form.Control
                  type="number"
                  placeholder="Min"
                  onChange={(e) =>
                    handleFilterChange("priceRange", { min: e.target.value })
                  }
                />
                <Form.Control
                  type="number"
                  placeholder="Max"
                  onChange={(e) =>
                    handleFilterChange("priceRange", { max: e.target.value })
                  }
                />
              </div>
            </div>

            <Button variant="primary " className="w-100 btn-catalog" onClick={applyFilters}>
              Apply
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9}  className="book-content">
          <div className="catalog-search-bar mb-4 mt-4">
            <div className="d-flex boder-input">
              <Form.Control
                type="text"
                placeholder="Find Your Book Here"
                className="me-2 boder-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Ngăn hành vi mặc định
                    handleSearch();
                  }
                }}
              />
              <Button  className="btn-catalog"   variant="danger" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>

          <Row className="catalog-books">
            {currentBooks.map((book) => (
              <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="book-item shadow-sm">
                  <Card.Img variant="top" src={book.coverImage} alt={book.title} />
                  <Card.Body className="text-content">
                    <h5 className="tittle">{book.title}</h5>
                    <Card.Text>{book.author}</Card.Text>
                    <Card.Text>${book.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>


          <Pagination className="justify-content-center mt-4">
            {Array.from({ length: Math.ceil(filteredBooks.length / booksPerPage) }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>

        </Col>
      </Row>
    </Container>
  );
};

export default memo(Catalog);

