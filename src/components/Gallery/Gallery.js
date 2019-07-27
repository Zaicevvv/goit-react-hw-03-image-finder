import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import css from './Gallery.module.css';

const Gallery = ({ pictures, openModal }) => (
  <div>
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <li key={picture.id} className={css.gallery_item}>
          <PhotoCard
            {...picture}
            openModal={() => openModal(picture.largeImageURL)}
          />
        </li>
      ))}
    </ul>
  </div>
);

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;
