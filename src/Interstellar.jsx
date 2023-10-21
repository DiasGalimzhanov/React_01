import React from 'react';

const Interstellar = (props) => {
    const { title, director, releaseYear, studio, posterURL } = props;
  
    return (
      <div className="film-info">
        <h1>{title}</h1>
        <p><strong>Режиссер:</strong> {director}</p>
        <p><strong>Год выпуска:</strong> {releaseYear}</p>
        <p><strong>Киностудия:</strong> {studio}</p>
        <img src={posterURL} alt={title} />
      </div>
    );
  };

export default Interstellar;