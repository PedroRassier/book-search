/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import { Star } from 'phosphor-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './bookView.scss';
// eslint-disable-next-line linebreak-style

export default function BookView(props) {
  const [icon, setIcon] = useState(false);

  return (
    <article>
      <div id="BookViewHeader">
        <a href={props.bookLink} target="_blank" rel="noreferrer">
          <img src={props.imgSrc} alt="" />
        </a>
        <div>
          <h1>{props.title}</h1>
          <h3>{props.author}</h3>
          {icon ? (
            <Star
              onClick={() => setIcon(!icon)}
              size={32}
              color="#ffb700"
              weight="fill"
            />
          ) : (
            <Star
              onClick={() => setIcon(!icon)}
              size={32}
              color="#ffb700"
              weight="bold"
            />
          )}
        </div>
      </div>
      <p>{props.description}</p>
    </article>
  );
}

BookView.propTypes = {
  bookLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
};
