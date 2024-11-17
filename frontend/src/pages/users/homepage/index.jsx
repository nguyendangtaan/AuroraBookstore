import {memo} from "react";
import {Carousel,Image,Container,Row} from "react-bootstrap";
import "./style.scss";
import images from '../../../assets/users/img_baner.js';



const Hompage=()=>{
    return(
    <Container fluid  className="home-page">
    <Row> 
        <Carousel className="pt-3">
        <Carousel.Item className="carousel-item" interval={2000}>
          <Image  src={images.image1} className=" baner img" /> 
          <Carousel.Caption>   
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <Image src={images.image2} className=" baner "  /> 
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <Image src={images.image3} className=" baner "  /> 
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Row> 
      </Container>
    )
}
export default memo(Hompage)