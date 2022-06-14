import React from 'react';
import './Carousel.css';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.webp';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={banner2} className="d-block" alt="..." />
        </div>
        <div className="carousel-item active">
          <img src={banner3} className="d-block" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner4} className="d-block" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default Carousel