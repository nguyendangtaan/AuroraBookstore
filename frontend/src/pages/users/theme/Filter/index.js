import {memo} from "react";
import React from 'react';
import './Filter.scss';

function Filter() {
  return (
    <div className="Sidebar">
   <div className="logo" >
   <h2>Books</h2>
   </div>
    <div className="filter-section">
      <h2>Filter</h2>
      <p>120 results</p>
      <div className="filter-tags mg_bt">
        <span>English</span>
        <span>Business</span>
      </div>
      <div className="filter-options mg_bt">
        <h3>Categories</h3>
        <label><input type="checkbox" /> Educational</label>
        <label><input type="checkbox" /> Business</label>
        <label><input type="checkbox" /> Marketing</label>
      </div>
      <div className="filter-options mg_bt">
        <h3>Language</h3>
        <label><input type="checkbox" /> English</label>
        <label><input type="checkbox" /> Ukrainian</label>
      </div>
      <div className="filter-options mg_bt">
        <h3>Author</h3>
        <input type="text" placeholder="Find Author" />
      </div>
      <div className="filter-price mg_bt">
        <h3>Price</h3>
        <label>From</label><input type="number" placeholder="Min" /> <label>to</label> <input type="number" placeholder="Max" />
        
      </div>
      <button className="apply">Apply</button>
    </div>
    </div>
  );
}

export default memo(Filter);
