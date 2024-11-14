import {memo} from "react";
import './header.scss'
import { Link } from "react-router-dom";
import { FaShoppingBag,FaBookmark,FaSearch } from "react-icons/fa";


const Header=()=>{
    return (
        <header className="header">
          <div className="container">
            <div className="header__logo">AURORA</div>
            <nav className="header__nav">
              <Link to="/books" className="header__link">Books</Link>
              <Link to="/about" className="header__link">About Us</Link>
              <Link to="/contact" className="header__link">Contacts</Link>
            </nav>
            <div className="header__icons">
              <FaSearch className="header__icon" />
              <FaBookmark className="header__icon" />
              <FaShoppingBag className="header__icon" />
              <button className="header__login">Login</button>
            </div>
            
          </div>
        </header>
      );
}
export default memo(Header)