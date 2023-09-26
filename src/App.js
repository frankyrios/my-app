import logo from './logo.svg';
import './App.css';

function App() {

  const handlePayment = async () => {
    const userAgent = navigator.userAgent
    if (/(android|iphone|ipad)/i.test(userAgent)) {
      if (/android/i.test(userAgent)) {
        setTimeout(() => {
          const androidURL =
            'https://instagram.com/reels/?launch_app_store=1'
          window.open(androidURL, '_blank')
        }, 5000)
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://instagram.com/reels/?launch_app_store=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram href
        </a>
        <button onClick={handlePayment}>
          Instagram window.open
        </button>
      </header>
    </div>
  );
}

export default App;
