import React, { Component } from 'react';
import './index.css';
import Slider from 'react-slick';

import MovieCover from '../MovieCover';
import movieCovers from '../../pages/Home';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 8000,
      cssEase: 'linear',
    };
    return (
      <div className="carousel">
        <h1 className="text">Movies</h1>
        <Slider {...settings}>
          {movieCovers.map(() => (
            <MovieCover />
          ))}
        </Slider>
      </div>
    );
  }
}
