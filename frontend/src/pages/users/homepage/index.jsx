import { memo,useRef,useState,useEffect} from "react";
import { Carousel, Image, Container, Row, Col, Card, Button,Form } from "react-bootstrap";
import { FaComment, FaStar,FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./homepage.scss";
import images from "../../../assets/users/img.js";


const arrivalsbooks =[
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
]
  
const bestsellers = [
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
]
const authors = [
    {
        "id": 1,
        "name": "Joanne Rowling",
        "booksCount": 20,
        "image": "https://hoangphucphoto.com/wp-content/uploads/2022/12/aenh-chan-dung.jpg"
    },
    {
        "id": 2,
        "name": "George R.R. Martin",
        "booksCount": 15,
        "image": "https://studiochupanhdep.com/Upload/Images/anh-chan-dung-nam.jpeg"
    },
    {
        "id": 3,
        "name": "J.R.R. Tolkien",
        "booksCount": 10,
        "image": "https://media.viez.vn/prod/2021/7/18/large_5ec15be7ce123c138c741292_Hong_Soo_joo_2_7d9274496a.jpg"
    },
    {
        "id": 4,
        "name": "Stephen King",
        "booksCount": 60,
        "image": "https://media.viez.vn/prod/2021/7/18/large_wow_kimsohyun_136682322_1112778399141637_4512478730532290046_n_8c58668714.jpg"
    },
    {
        "id": 5,
        "name": "Agatha Christie",
        "booksCount": 85,
        "image": "https://media.viez.vn/prod/2021/7/18/20210709135118_96b3_e41cf8aa94.jpeg"
    },
    {
        "id": 6,
        "name": "Colleen Hoover",
        "booksCount": 25,
        "image": "https://media.viez.vn/prod/2021/7/18/large_126482899_1216247915494608_2092985503606971264_n_028b9ffabe.jpg"
    },
    {
        "id": 7,
        "name": "Taylor Jenkins Reid",
        "booksCount": 8,
        "image": "https://media.viez.vn/prod/2021/7/18/large_yg_stage_212091557_204294651485998_66395704510165763_n_d3593dfce9.jpg"
    },
    {
        "id": 8,
        "name": "V.E. Schwab",
        "booksCount": 12,
        "image": "https://static2.yan.vn/YanNews/2167221/202209/visual-cuc-pham-duoc-ghep-tu-guong-mat-cua-cac-idol-nu-43d6a828.jpg"
    },
    {
        "id": 9,
        "name": "Madeline Miller",
        "booksCount": 3,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086835101.jpg"
    },
    {
        "id": 10,
        "name": "Emily Henry",
        "booksCount": 5,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086836757.jpg"
    },
    {
        "id": 11,
        "name": "Haruki Murakami",
        "booksCount": 15,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086847345.jpg"
    },
    {
        "id": 12,
        "name": "Erin Morgenstern",
        "booksCount": 4,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086847531.jpg"
    },
    {
        "id": 13,
        "name": "Delia Owens",
        "booksCount": 2,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086835279.jpg"
    },
    {
        "id": 14,
        "name": "Renée Carlino",
        "booksCount": 6,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086845905.jpg"
    },
    {
        "id": 15,
        "name": "Rebecca Yarros",
        "booksCount": 7,
        "image": "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086834594.jpg"
    }
];

const Homepage = () => {
    const arrivalsRef = useRef(null);
    const bestsellersRef = useRef(null);
    const authorsRef = useRef(null);
  
    const [arrivalsScroll, setArrivalsScroll] = useState({
      showLeft: false,
      showRight: true,
    });
    const [bestsellersScroll, setBestsellersScroll] = useState({
      showLeft: false,
      showRight: true,
    });
    const [authorsScroll, setAuthorsScroll] = useState({
      showLeft: false,
      showRight: true,
    });
  
    // hàm xử lý cuộn
    const scroll = (ref, direction) => {
      if (ref.current) {
        const { scrollLeft, clientWidth } = ref.current;
        const scrollAmount = clientWidth / 2; // Cuộn nửa chiều rộng
        if (direction === "left") {
          ref.current.scrollTo({
            left: scrollLeft - scrollAmount,
            behavior: "smooth",
          });
        } else {
          ref.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
      }
    };
  
    //kiểm  tra trạng thái nút cuộn
    const checkScrollPosition = (ref, setScrollState) => {
      if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        setScrollState({
          showLeft: scrollLeft > 0,
          showRight: scrollLeft < scrollWidth - clientWidth,
        });
      }
    };
  
    // gắn sự kiện
    useEffect(() => {
        const attachScroll = (ref, setScrollState) => {
          const element = ref.current;
          const handleScroll = () => checkScrollPosition(ref, setScrollState);
      
          if (element) {
            element.addEventListener("scroll", handleScroll);
          }
      
          return () => {
            if (element) {
              element.removeEventListener("scroll", handleScroll);
            }
          };
        };
      
        
        const detachArrivals = attachScroll(arrivalsRef, setArrivalsScroll);
        const detachBestsellers = attachScroll(bestsellersRef, setBestsellersScroll);
        const detachAuthors = attachScroll(authorsRef, setAuthorsScroll);
      
       
        return () => {
          detachArrivals();
          detachBestsellers();
          detachAuthors();
        };
      }, []);
  return (
    <Container fluid className="home-page">
      {/* Banner Section */}
      <Row className="carousel-row">
        <Carousel className="carousel-wrapper">
          <Carousel.Item className="carousel-item img-fluid" interval={2000}>
            <Image src={images.image1} className="baner img" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image src={images.image2} className="baner img img-fluid" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image src={images.image3} className="baner img img-fluid" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      </Row>

      {/* Body Section */}
      <Container className="body mt-5">
       {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="section-header">
          <h3>NEW ARRIVALS</h3>
          <Button variant="outline-dark see-all" size="sm">
            <Link to="/catalog">SEE ALL</Link>
          </Button>
        </div>
        <div className="scroll-container">
          {arrivalsScroll.showLeft && (
            <button
              className="scroll-button left"
              onClick={() => scroll(arrivalsRef, "left")}
            >
              <FaChevronLeft />
            </button>
          )}
          <div
            className="horizontal-scroll"
            ref={arrivalsRef}
            onScroll={() =>
              checkScrollPosition(arrivalsRef, setArrivalsScroll)
            }
          >
            {arrivalsbooks.map((book) => (
              <Link className="linkdetail"     to="/PPAGE">
              <Card key={book.BID} className="book-card ">
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
            ))}
          </div>
          {arrivalsScroll.showRight && (
            <button
              className="scroll-button right"
              onClick={() => scroll(arrivalsRef, "right")}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bestsellers mt-5">
        <div className="section-header">
          <h3>BEST SELLERS</h3>
          <Button variant="outline-dark see-all" size=" seeallsm">
          <Link to="/catalog">SEE ALL</Link>
          </Button>
        </div>
        <div className="scroll-container">
          {bestsellersScroll.showLeft && (
            <button
              className="scroll-button left"
              onClick={() => scroll(bestsellersRef, "left")}
            >
              <FaChevronLeft />
            </button>
          )}
          <div
            className="horizontal-scroll"
            ref={bestsellersRef}
            onScroll={() =>
              checkScrollPosition(bestsellersRef, setBestsellersScroll)
            }
          >
            {bestsellers.map((book) => (
             <Link  className="linkdetail" to="/PPAGE"> <Card key={book.BID} className="book-card ">
                <div className="bookImg">
                <Card.Img variant="top" src={book.URL} alt={book.BNAME}/></div>
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
            ))}
          </div>
          {bestsellersScroll.showRight && (
            <button
              className="scroll-button right"
              onClick={() => scroll(bestsellersRef, "right")}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </section>

      {/* Popular Authors */}
      <section className="popular-authors mt-5">
        <div className="section-header">
          <h3>POPULAR AUTHORS</h3>
          <Button variant="outline-dark seeall" size="sm">
          <Link to="/catalog">SEE ALL</Link>
          </Button>
        </div>
        <div className="scroll-container">
          {authorsScroll.showLeft && (
            <button
              className="scroll-button left"
              onClick={() => scroll(authorsRef, "left")}
            >
              <FaChevronLeft />
            </button>
          )}
          <div
            className="horizontal-scroll"
            ref={authorsRef}
            onScroll={() =>
              checkScrollPosition(authorsRef, setAuthorsScroll)
            }
          >
            {authors.map((author) => (
              <div key={author.id} className="author-card">
                <img
                  src={author.image}
                  alt={author.name}
                  className="author-img"
                />
                <p className="autthorName">{author.name}</p>
                <small className="countBook">{author.booksCount} books</small>
              </div>
            ))}
          </div>
          {authorsScroll.showRight && (
            <button
              className="scroll-button right"
              onClick={() => scroll(authorsRef, "right")}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </section>

      <section className="Newsletter ">
  <Row>
    <Col xs={12} lg={6} className="noidung">
      <h3>STAY UPDATED WITH OUR NEWSLETTER</h3>
      <p>Get The Lastest Updates And Special Offers</p>
    </Col>
    <Col xs={12} lg={6} className="form-email">
      <div className="input-container">
        <Form.Control
          type="text"
          placeholder="Enter your Email"
          className="form-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <Button className="btn-signup">SIGN UP</Button>
      </div>
      <p>By subscribing, you agree to our terms and conditions</p>
    </Col>
  </Row>
</section>
      </Container>
    </Container>
  );
};

export default memo(Homepage);
