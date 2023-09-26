import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [so, setSo] = useState();


  useEffect(() => {
    const userAgent = navigator.userAgent

    if (/(android|iphone|ipad)/i.test(userAgent)) {
      if (/android/i.test(userAgent)) {
        setSo('android')
      } else if (/iphone|ipad/i.test(userAgent)) {
        setSo('ios')
      }
    } else {
      setSo('escritorio')
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href={so === 'android' ? "https://instagram.com/reels/?launch_app_store=1" : (so === 'ios' ? "https://apps.apple.com/app/instagram/id389801252" : "https://instagram.com")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

      </header>
    </div>
  );
}

export default App;
