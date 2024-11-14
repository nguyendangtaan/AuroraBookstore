import {memo} from "react";
import React from 'react';
import './BookContent.scss';

function BookContent() {
  return (
    <div className="book-content">
      <div className="catalog-search-bar">
            <input type="text" placeholder="Find Your Book Here" />
            <button>Search</button>
          </div>
          
          <div className="catalog-books">
            {/* Display book items in a grid layout */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="book-item">
                {/* Render each book item here */}
                <img src="book-cover-url" alt="Book Title" />
                <h3>Book Title</h3>
                <p>Author</p>
                <p>Price</p>
              </div>
            ))}
          </div>

          <div className="pagination">
            {/* Pagination controls */}
            <span>1</span> <span>2</span> <span>3</span>
          </div>
    </div>
  );
}

export default memo(BookContent);

