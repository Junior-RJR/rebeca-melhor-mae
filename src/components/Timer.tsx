import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0
  });

  useEffect(() => {
    const startDate = new Date('2018-12-26T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      let diff = now.getTime() - startDate.getTime();

      const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      diff -= anos * (1000 * 60 * 60 * 24 * 365.25);

      const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      diff -= meses * (1000 * 60 * 60 * 24 * 30.44);

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= dias * (1000 * 60 * 60 * 24);

      const horas = Math.floor(diff / (1000 * 60 * 60));
      diff -= horas * (1000 * 60 * 60);

      const minutos = Math.floor(diff / (1000 * 60));
      diff -= minutos * (1000 * 60);

      const segundos = Math.floor(diff / 1000);

      setTimeLeft({ anos, meses, dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-container">
      <h3>Tempo de nossa história:</h3>
      <div className="timer-grid">
        <div className="timer-item"><span>{timeLeft.anos}</span>Anos</div>
        <div className="timer-item"><span>{timeLeft.meses}</span>Meses</div>
        <div className="timer-item"><span>{timeLeft.dias}</span>Dias</div>
        <div className="timer-item"><span>{timeLeft.horas}</span>Hrs</div>
        <div className="timer-item"><span>{timeLeft.minutos}</span>Min</div>
        <div className="timer-item"><span>{timeLeft.segundos}</span>Seg</div>
      </div>
    </div>
  );
};

export default Timer;