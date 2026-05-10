import { useState, useEffect } from 'react';

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

  const handleRedeem = () => {
    const message = encodeURIComponent("Oi meu amor! Acabei de ver meu presente de Dia das Mães! Eu sou uma mãe perfeita e amei a surpresa! ❤️ Já quero minhas roupas novas!");
    window.open(`https://api.whatsapp.com/send?phone=5511946252220&text=${message}`, '_blank');
  };

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
        <h2 style={{fontFamily: 'Dancing Script'}}>Análise Concluída! 🏆</h2>
        <p>Você é uma mãe perfeita! Toque no presente para abrir:</p>
        <div className="gift-box-container" onClick={() => setPhase('reveal')}>
            <div className="gift-box-visual">🎁</div>
            <p className="tap-text">CLIQUE PARA ABRIR</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gift-card reveal-animation">
      <p style={{ letterSpacing: '2px', fontWeight: 'bold' }}>VOCÊ GANHOU UM</p>
      <h2 className="gift-title">VALE-ROUPAS</h2>
      <div className="gift-value">R$ 350,00</div>
      <p className="gift-description">
        Para você renovar seu guarda-roupa e ficar ainda mais linda! 👗✨
      </p>
      <button className="btn-redeem" onClick={handleRedeem}>
        Resgatar Presente no WhatsApp 📱
      </button>
      <p style={{marginTop: '20px', fontSize: '0.8rem', opacity: 0.9}}>Te amamos mil milhões!</p>
    </div>
  );
};

export default GiftSection;