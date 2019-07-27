import React from 'react';
import PropTypes from 'prop-types';
import css from './PhotoCard.module.css';

const PhotoCard = ({
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  openModal,
}) => (
  <div className={css.photo_card}>
    <img src={webformatURL} alt="random-img" />

    <div className={css.stats}>
      <p className={css.stats_item}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={css.stats_item}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={css.stats_item}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={css.stats_item}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button type="button" className={css.fullscreen_button} onClick={openModal}>
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.defaultProps = {
  comments: 129,
};

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number,
  downloads: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PhotoCard;
