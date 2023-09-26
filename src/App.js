import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState();

  useEffect(() => {
    const userAgent = navigator.userAgent

    if (/(android|iphone|ipad)/i.test(userAgent)) {
      if (/android/i.test(userAgent)) {
        setUrl('https://bel3-ent4.osapps.bi.com.gt/fl?fintech_name=fonyou&fintech_id=202104086749&fintech_logo=https://recargo.miclaro.com.gt/img/logo-claro.jpg&requestId=40C12FC8-576E-4F15-BBE8-A6A749248D80&type=webmovil')
      } else if (/iphone|ipad/i.test(userAgent)) {
        setUrl('https://belappgt.bi.com.gt/fl?appName=fonyou&appId=202104086749&requestId=40C12FC8-576E-4F15-BBE8-A6A749248D80&logoURL=https://recargo.miclaro.com.gt/img/logo-claro.jpg&type=webmovil')
      }
    } else {
      setUrl('https://www.corporacionbi.com/gt/bancoindustrial/')
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
          BI
        </a>

      </header>
    </div>
  );
}

export default App;
