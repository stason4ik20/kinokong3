import React, { PureComponent } from 'react';

import Rating from '../Rating';

import './index.css';

class MovieCover extends PureComponent {
  render() {
    const { title, coverImage, rating, url } = this.props;

    return (
      <div className="movie-cover">
        <figure>
          <h2 className="title">{title}</h2>
          <img className="img-responsive" src={coverImage} alt={title} width="100%" />
          <Rating rating={rating} />
          <a href={url}>Online</a>
        </figure>
      </div>
    );
  }
}

export default MovieCover;
