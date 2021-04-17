import React from 'react';

import Slider from 'react-slick';

import slide1 from '../../Assets/Image/slide5.jpg';
import slide2 from '../../Assets/Image/slide2.jpg';
import slide3 from '../../Assets/Image/slide3.jpg';
import slide4 from '../../Assets/Image/slide4.jpg';
import slide5 from '../../Assets/Image/slide1.jpg';
import slide6 from '../../Assets/Image/slide6.jpg';
import slide7 from '../../Assets/Image/slide7.jpg';
import slide8 from '../../Assets/Image/slide8.jpg';

import './Carousel.scss';
function Carousel() {
  // Setting Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const listImage = [
    {
      id: 0,
      link: slide1,
    },
    {
      id: 1,
      link: slide2,
    },
    {
      id: 2,
      link: slide3,
    },
    {
      id: 3,
      link: slide4,
    },
    {
      id: 4,
      link: slide5,
    },
    {
      id: 5,
      link: slide6,
    },
    {
      id: 6,
      link: slide7,
    },
    {
      id: 7,
      link: slide8,
    },
  ];
  //   Render List Image Slide
  const renderListImageSlide = () => {
    return listImage.map((item, index) => {
      return (
        <div className="carousel__item" key={index}>
          <img src={item.link} alt={`image-${item.id}`} />
        </div>
      );
    });
  };
  return (
    <section className="carousel">
      <Slider {...settings}>{renderListImageSlide()}</Slider>
    </section>
  );
}

export default Carousel;
