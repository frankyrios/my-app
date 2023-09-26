import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState();

  useEffect(() => {
    const userAgent = navigator.userAgent

    if (/(android|iphone|ipad)/i.test(userAgent)) {
      if (/android/i.test(userAgent)) {
        setUrl('https://instagram.com/reels/?launch_app_store=1')
      } else if (/iphone|ipad/i.test(userAgent)) {
        setUrl('https://instagram.com/reels/?launch_app_store=1')
      }
    } else {
      setUrl('https://instagram.com/reels/?launch_app_store=1')
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>

      </header>
    </div>
  );
}

export default App;
