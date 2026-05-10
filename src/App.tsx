import { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Timer from './components/Timer';
import About from './components/About';
import MessageFlow from './components/MessageFlow';
import GiftSection from './components/GiftSection';
import './App.css';

function App() {
  const [showMessages, setShowMessages] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const handleOpenMessages = () => {
    setShowMessages(true);
    window.scrollTo(0, 0); // Manda pro topo
  };

  const handleOpenGift = () => {
    setShowGift(true);
    window.scrollTo(0, 0); // Manda pro topo
  };

  return (
    <div className="App">
      {!showMessages ? (
        <>
          <Header />
          <Carousel />
          <Timer />
          <About />
          <div style={{ padding: '0 20px 40px' }}>
            <button className="btn-primary" onClick={handleOpenMessages}>
              Clique aqui, Rebeca ❤️
            </button>
          </div>
        </>
      ) : (
        <div className="flow-container">
          {!showGift ? (
            <MessageFlow onComplete={handleOpenGift} />
          ) : (
            <GiftSection />
          )}
          
          <button 
            onClick={() => {setShowMessages(false); setShowGift(false); window.scrollTo(0, 0);}} 
            style={{ background: 'none', border: 'none', color: '#999', marginTop: '20px', cursor: 'pointer' }}
          >
            ← Voltar ao início
          </button>
        </div>
      )}
    </div>
  );
}

export default App;