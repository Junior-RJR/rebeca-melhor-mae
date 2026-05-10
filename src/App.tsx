import React, { useState } from 'react';
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

  return (
    <div className="App">
      {!showMessages ? (
        <>
          <Header />
          <Carousel />
          <Timer />
          <About />
          <div style={{ padding: '0 20px 40px' }}>
            <button className="btn-primary" onClick={() => setShowMessages(true)}>
              Clique aqui, Rebeca ❤️
            </button>
          </div>
        </>
      ) : (
        <div className="flow-container">
          {!showGift ? (
            <MessageFlow onComplete={() => setShowGift(true)} />
          ) : (
            <GiftSection />
          )}
          
          <button 
            onClick={() => {setShowMessages(false); setShowGift(false)}} 
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