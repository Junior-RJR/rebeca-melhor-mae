import React, { useState } from 'react';

const images = [
  'foto1.jpeg',
  'foto2.jpeg',
  'foto3.jpeg',
  'foto5.jpeg',
  'foto6.jpeg',
  'foto7.jpeg',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);

  return (
    <div className="carousel">
      <button onClick={prev} className="nav-btn left">❮</button>
      <img src={images[current]} alt="Nossa história" />
      <button onClick={next} className="nav-btn right">❯</button>
      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className={i === current ? 'dot active' : 'dot'} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;