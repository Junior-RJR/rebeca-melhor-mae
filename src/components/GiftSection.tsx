import React, { useState, useEffect } from 'react';

const GiftSection = () => {
  const [phase, setPhase] = useState('loading'); // loading -> ready -> reveal
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (phase === 'loading') {
      const timer = setInterval(() => {
        setPercent(p => {
          if (p >= 100) {
            clearInterval(timer);
            setPhase('ready');
            return 100;
          }
          return p + 1;
        });
      }, 40);
      return () => clearInterval(timer);
    }
  }, [phase]);

  if (phase === 'loading') {
    return (
      <div className="suspense-container">
        <h3>Calculando nível de "Melhor Mãe do Mundo"...</h3>
        <div className="progress-bar"><div className="progress-fill" style={{width: `${percent}%`}}></div></div>
        <p>{percent}%</p>
      </div>
    );
  }

  if (phase === 'ready') {
    return (
      <div className="suspense-container">
        <h2>Nível Máximo Detectado! 🏆</h2>
        <p>Você é incrível! Toque no presente abaixo:</p>
        <div className="box-shake" onClick={() => setPhase('reveal')}>🎁</div>
      </div>
    );
  }

  return (
    <div className="gift-card">
      <p>VOCÊ GANHOU</p>
      <h2>R$ 350,00</h2>
      <p>Para gastar com roupas novas! 👗</p>
      <p style={{marginTop: '20px', fontSize: '0.8rem'}}>Te amamos demais!</p>
    </div>
  );
};

export default GiftSection;