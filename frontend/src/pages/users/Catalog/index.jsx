import React, { memo, useState,useEffect } from "react";
import { Row, Col, Card, Form, Button, Pagination, Container,  } from "react-bootstrap";
import { FaComment, FaStar,FaAngleDown} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Catalog.scss";

const Catalog = () => {
  const fakeBooks = [
    {
      "BID": 1,
      "BNAME": "Yellowface",
      "ISBN": "9789190000000",
      "AUTHOR": "R.F. Kuang",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A satirical novel exploring cultural appropriation and the publishing industry.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671336608i/62047984.jpg",
      "PAGE": 336,
      "AVAILABLE": 50,
      "GENRES": "Fiction",
      "LIKE": 1230,
      "COMMENT": 480,
      "PRICE": 19.99
    },
    {
      "BID": 2,
      "BNAME": "Weyward",
      "ISBN": "9780120000000",
      "AUTHOR": "Emilia Hart",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "Three generations of women in an English village discover their mystical powers and connections.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684204420i/127280850.jpg",
      "PAGE": 336,
      "AVAILABLE": 30,
      "GENRES": "Fiction",
      "LIKE": 950,
      "COMMENT": 340,
      "PRICE": 17.49
    },
    {
      "BID": 3,
      "BNAME": "The Housemaid's Secret",
      "ISBN": "9784160000000",
      "AUTHOR": "Freida McFadden",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A psychological thriller uncovering dark secrets behind a seemingly perfect family.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664729357i/62848145.jpg",
      "PAGE": 400,
      "AVAILABLE": 25,
      "GENRES": "Mystery/Thriller",
      "LIKE": 830,
      "COMMENT": 410,
      "PRICE": 21.99
    },
    {
      "BID": 4,
      "BNAME": "Happy Place",
      "ISBN": "9781540000000",
      "AUTHOR": "Emily Henry",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A heartfelt romance about a couple pretending to still be together during a vacation.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660145160i/61718053.jpg",
      "PAGE": 400,
      "AVAILABLE": 40,
      "GENRES": "Romance",
      "LIKE": 1100,
      "COMMENT": 520,
      "PRICE": 22.49
    },
    {
      "BID": 5,
      "BNAME": "Hell Bent",
      "ISBN": "9786030000000",
      "AUTHOR": "Leigh Bardugo",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "The dark academia sequel to Ninth House, diving deeper into mysteries and magic.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648744814i/60652997.jpg",
      "PAGE": 480,
      "AVAILABLE": 35,
      "GENRES": "Fantasy",
      "LIKE": 1400,
      "COMMENT": 670,
      "PRICE": 24.99
    },
    {
      "BID": 6,
      "BNAME": "Fourth Wing",
      "ISBN": "9785900000000",
      "AUTHOR": "Rebecca Yarros",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A romance-fantasy novel centered around dragon riders and their struggles.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg",
      "PAGE": 528,
      "AVAILABLE": 45,
      "GENRES": "Romantasy",
      "LIKE": 1600,
      "COMMENT": 720,
      "PRICE": 26.99
    },
    {
      "BID": 7,
      "BNAME": "In the Lives of Puppets",
      "ISBN": "9786690000000",
      "AUTHOR": "T.J. Klune",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A whimsical and touching story featuring robots and family bonds.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699617963i/60784549.jpg",
      "PAGE": 432,
      "AVAILABLE": 25,
      "GENRES": "Science Fiction",
      "LIKE": 870,
      "COMMENT": 390,
      "PRICE": 18.99
    },
    {
      "BID": 8,
      "BNAME": "Holly",
      "ISBN": "9782120000000",
      "AUTHOR": "Stephen King",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A new horror entry featuring fan-favorite investigator Holly Gibney.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
      "PAGE": 464,
      "AVAILABLE": 50,
      "GENRES": "Horror",
      "LIKE": 1550,
      "COMMENT": 800,
      "PRICE": 23.99
    },
    {
      "BID": 9,
      "BNAME": "Divine Rivals",
      "ISBN": "9785580000000",
      "AUTHOR": "Rebecca Ross",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A romantic YA fantasy set during a gods' war.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655928079i/60784546.jpg",
      "PAGE": 384,
      "AVAILABLE": 20,
      "GENRES": "Young Adult Fantasy",
      "LIKE": 740,
      "COMMENT": 330,
      "PRICE": 16.49
    },
    {
      "BID": 10,
      "BNAME": "Check & Mate",
      "ISBN": "9780450000000",
      "AUTHOR": "Ali Hazelwood",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A chess prodigy’s story interwoven with romance.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg",
      "PAGE": 320,
      "AVAILABLE": 20,
      "GENRES": "Young Adult Fiction",
      "LIKE": 680,
      "COMMENT": 310,
      "PRICE": 15.99
    },
    {
      "BID": 11,
      "BNAME": "Poverty, by America",
      "ISBN": "9787990000000",
      "AUTHOR": "Matthew Desmond",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "An exploration of poverty and inequality in America.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1665696294i/61358638.jpg",
      "PAGE": 304,
      "AVAILABLE": 50,
      "GENRES": "Nonfiction",
      "LIKE": 1330,
      "COMMENT": 600,
      "PRICE": 20.99
    },
    {
      "BID": 12,
      "BNAME": "The Woman in Me",
      "ISBN": "9787290000000",
      "AUTHOR": "Britney Spears",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A candid memoir by the pop star about her life and career.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689090540i/63133205.jpg",
      "PAGE": 288,
      "AVAILABLE": 30,
      "GENRES": "Memoir/Autobiography",
      "LIKE": 920,
      "COMMENT": 390,
      "PRICE": 18.49
    },
    {
      "BID": 13,
      "BNAME": "The Wager",
      "ISBN": "9788030000000",
      "AUTHOR": "David Grann",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A tale of shipwreck, mutiny, and survival in the 18th century.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659407155i/61714633.jpg",
      "PAGE": 352,
      "AVAILABLE": 30,
      "GENRES": "History/Biography",
      "LIKE": 1020,
      "COMMENT": 430,
      "PRICE": 22.99
    },
    {
      "BID": 14,
      "BNAME": "Being Henry",
      "ISBN": "9784320000000",
      "AUTHOR": "Henry Winkler",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A humorous autobiography by actor Henry Winkler.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677855868i/65215014.jpg",
      "PAGE": 256,
      "AVAILABLE": 20,
      "GENRES": "Humor",
      "LIKE": 870,
      "COMMENT": 370,
      "PRICE": 19.49
    },
    {
      "BID": 15,
      "BNAME": "The Covenant of Water",
      "ISBN": "9782250000000",
      "AUTHOR": "Abraham Verghese",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A multi-generational saga exploring the lives of a South Indian family.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687600746i/180357146.jpg",
      "PAGE": 736,
      "AVAILABLE": 30,
      "GENRES": "Literary Fiction",
      "LIKE": 1400,
      "COMMENT": 680,
      "PRICE": 27.99
    },
    {
      "BID": 16,
      "BNAME": "Lessons in Chemistry",
      "ISBN": "9785460000000",
      "AUTHOR": "Bonnie Garmus",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A witty and empowering novel about a female chemist in the 1960s.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1714630953i/206305528.jpg",
      "PAGE": 400,
      "AVAILABLE": 45,
      "GENRES": "Fiction",
      "LIKE": 1550,
      "COMMENT": 760,
      "PRICE": 21.49
    },
    {
      "BID": 17,
      "BNAME": "Spare",
      "ISBN": "9788790000000",
      "AUTHOR": "Prince Harry",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A memoir by Prince Harry offering insights into his life as a royal.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673458354i/62296528.jpg",
      "PAGE": 416,
      "AVAILABLE": 50,
      "GENRES": "Biography/Memoir",
      "LIKE": 1780,
      "COMMENT": 840,
      "PRICE": 24.99
    },
    {
      "BID": 18,
      "BNAME": "The Light We Carry",
      "ISBN": "9781230000000",
      "AUTHOR": "Michelle Obama",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "Inspirational insights from the former First Lady on navigating challenges.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658477208i/61355265.jpg",
      "PAGE": 336,
      "AVAILABLE": 40,
      "GENRES": "Self-help/Memoir",
      "LIKE": 1680,
      "COMMENT": 790,
      "PRICE": 22.99
    },
    {
      "BID": 19,
      "BNAME": "Tomorrow, and Tomorrow, and Tomorrow",
      "ISBN": "9783750000000",
      "AUTHOR": "Gabrielle Zevin",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A story of friendship, love, and creativity in the world of video game design.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
      "PAGE": 416,
      "AVAILABLE": 35,
      "GENRES": "Fiction",
      "LIKE": 1500,
      "COMMENT": 700,
      "PRICE": 20.99
    },
    {
      "BID": 20,
      "BNAME": "Our Missing Hearts",
      "ISBN": "9783410000000",
      "AUTHOR": "Celeste Ng",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A dystopian tale about motherhood, art, and the power of words.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664802258i/60149573.jpg",
      "PAGE": 352,
      "AVAILABLE": 40,
      "GENRES": "Dystopian Fiction",
      "LIKE": 1320,
      "COMMENT": 610,
      "PRICE": 19.99
    },
    {
      "BID": 21,
      "BNAME": "It Starts with Us",
      "ISBN": "9786730000000",
      "AUTHOR": "Colleen Hoover",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "The sequel to 'It Ends with Us', exploring new beginnings and resilience.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg",
      "PAGE": 336,
      "AVAILABLE": 60,
      "GENRES": "Romance",
      "LIKE": 1850,
      "COMMENT": 890,
      "PRICE": 18.49
    },
    {
      "BID": 22,
      "BNAME": "Fairy Tale",
      "ISBN": "9780890000000",
      "AUTHOR": "Stephen King",
      "LANGUAGE": "English",
      "PUBYEAR": 2023,
      "DESCRIPTION": "A spellbinding story that blends fantasy and horror in the unique style of Stephen King.",
      "URL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg",
      "PAGE": 608,
      "AVAILABLE": 30,
      "GENRES": "Fantasy",
      "LIKE": 1950,
      "COMMENT": 970,
      "PRICE": 25.99
    }
  
    
  ];

  const [books, setBooks] = useState(fakeBooks);

  const [searchText, setSearchText] = useState("");

  const [filteredBooks, setFilteredBooks] = useState(fakeBooks);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const languages = ["English", "Russian", "Vietnam", "Thailand", "USA", "Germany", "Brazil"];
  const genres=["Fiction", "Business", "Educational", "Romance", "Adventure","Selfhept","Trinh Thám"];


  const [filters, setFilters] = useState({
    GENRES: [],
    LANGUAGE: [],
    AUTHOR: "",
    PRICE: { min: "", max: "" },
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
          book.BNAME.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredBooks(filtered);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText, books]);

  const applyFilters = () => {
    const { GENRES, LANGUAGE, AUTHOR, PRICE } = filters;

    const filtered = books.filter((book) => {
      const genresMatch = GENRES.length ? GENRES.includes(book.GENRES) : true;
      const languageMatch = LANGUAGE.length ? LANGUAGE.includes(book.LANGUAGE) : true;
      const authorMatch = AUTHOR ? book.AUTHOR.toLowerCase().includes(AUTHOR.toLowerCase()) : true;
      const priceMatch =
        (PRICE.min === "" || book.PRICE >= Number(PRICE.min)) &&
        (PRICE.max === "" || book.PRICE <= Number(PRICE.max));
        const searchMatch = searchText ? book.BNAME.toLowerCase().includes(searchText.toLowerCase()) : true;

      return genresMatch && languageMatch && authorMatch && priceMatch && searchMatch;
    });

    setFilteredBooks(filtered);
  };
  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.BNAME.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      if (type === "GENRES" || type === "LANGUAGE") {
        const isSelected = prev[type].includes(value);
        return {
          ...prev,
          [type]: isSelected
            ? prev[type].filter((item) => item !== value)
            : [...prev[type], value],
        };
      }
      if (type === "AUTHOR") {
        return { ...prev, AUTHOR: value };
      }
      if (type === "PRICE") {
        return { ...prev, PRICE: { ...prev.PRICE, ...value } };
      }
      return prev;
    });
  };

  return (
    <Container fluid className="catalog-page">
      <Row>
        {/* Sidebar */}
        <Col xs={12}  md={3} className="Sidebar bg-light ">
          <div className="logo mb-4 mt-4">
            <h2>Books</h2>
          </div>
          <div className="filter-section">
            <h2>Filter</h2>
            <p>{filteredBooks.length} results</p>

            <div className="filter-tags mb-4">
              {filters.LANGUAGE.map((lang) => (
                <span key={lang} className="badge bg-secondary  me-2">
                  {lang}
                </span>
              ))}
              {filters.GENRES.map((lang) => (
                <span key={lang} className="badge bg-secondary  me-2">
                  {lang}
                </span>
              ))}
              
            </div>
            <div className="filter-options mb-4">
              <h3>Genres</h3>
              {genres.slice(0, showAllGenres ? genres.length : 5).map((genres) => (
                <Form.Check
                  key={genres}
                  label={genres}
                  onChange={() => handleFilterChange("GENRES", genres)}
                />
              ))}
              {genres.length > 5 && (
                <Button 
                  variant="link"
                 className="showMore  p-0"
                  onClick={() => setShowAllGenres(!showAllGenres)}
                >
                  {showAllGenres ? "View Less" : "View More"} <FaAngleDown />
                </Button>
              )}
            </div>

            <div className="filter-options mb-4">
              <h3>Language</h3>
              {languages.slice(0, showAllLanguages ? languages.length : 5).map((language) => (
                <Form.Check
                  key={language}
                  label={language}
                  onChange={() => handleFilterChange("LANGUAGE", language)}
                />
              ))}
              {languages.length > 5 && (
                <Button 
                  variant="link"
                 className="showMore  p-0"
                  onClick={() => setShowAllLanguages(!showAllLanguages)}
                >
                  {showAllLanguages ? "View Less" : "View More"}<FaAngleDown />
                </Button>
              )}
            </div>

            <div className="filter-options mb-4">
              <h3>Author</h3>
              <Form.Control
                type="text"
                placeholder="Find Author"
                onChange={(e) => handleFilterChange("AUTHOR", e.target.value)}
              />
            </div>

            <div className="filter-price mb-4">
              <h3>Price</h3>
              <div className="d-flex gap-2">
                <Form.Control
                  type="number"
                  placeholder="Min"
                  onChange={(e) =>
                    handleFilterChange("PRICE", { min: e.target.value })
                  }
                />
                <Form.Control
                  type="number"
                  placeholder="Max"
                  onChange={(e) =>
                    handleFilterChange("PRICE", { max: e.target.value })
                  }
                />
              </div>
            </div>

            <Button
              variant="primary "
              className="w-100 btn-catalog"
              onClick={applyFilters}
            >
              Apply
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col xs={12} sm={12} md={9} className="book-content">
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
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
              <Button
                className="btn-catalog"
                variant="danger"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          <Row className="catalog-books">
            {currentBooks.map((book) => (
              <Col key={book.id} xs={12} sm={6} md={6} lg={4}  className="mb-4">              
                <Link className="linkdetail"     to="/detail">
              <Card key={book.BID} className="book-card shadow-sm ">
                <div className="bookImg"><Card.Img variant="top" src={book.URL} alt={book.BNAME}/></div>
                <Card.Body className="Card-body">
                 <div className="cardTittle"> <Card.Title>{book.BNAME}</Card.Title></div>
                 <div className="cardAuthor"></div> <Card.Text>{book.AUTHOR}</Card.Text>
                  <div className="card-details d-flex">
                   <div className="comment"> <FaComment /> {book.COMMENT}</div> 
                   <div className="danhgia"><FaStar className="start"/> {book.LIKE}</div>
                  </div>
                  <p className="price" style={{fontWeight:"bold"}}>{book.PRICE}</p>
                </Card.Body>
              </Card>
              </Link>
              </Col>
            ))}
          </Row>

          <Pagination className="justify-content-center mt-4">
            {Array.from(
              { length: Math.ceil(filteredBooks.length / booksPerPage) },
              (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            )}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(Catalog);
