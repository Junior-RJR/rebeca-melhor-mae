import { useState, useEffect } from 'react';

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

  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Muda a foto sozinho a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="carousel">
      {/* <button onClick={prev} className="nav-btn left">‹</button> */}
      <div className="carousel-track">
        <img src={images[current]} alt="Nossa história" />
      </div>
      {/* <button onClick={next} className="nav-btn right">›</button> */}
      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === current ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;