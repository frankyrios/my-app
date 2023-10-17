import React from "react";
import "./App.css";

function App() {
  const payWithNewCuentaBi = async () => {
    try {
      const requestId = `requestId=123`;

      let url = "https://www.corporacionbi.com/gt/bancoindustrial/";
      const domainDeeplink = "https://belappgt.bi.com.gt/";
      const typeFonyou = "type=walletWeb";
      const userAgent = navigator.userAgent;

      if (/(android|iphone|ipad)/i.test(userAgent)) {
        if (/android/i.test(userAgent)) {
          const start = "fintech?";
          const nameFonyou = "fintech_name=Claro";
          const idFonyou = "fintech_id=fonyou";
          const logoFonyou =
            "fintech_logo=https://recargo.miclaro.com.gt/img/logo-claro.jpg";
          const urlDeeplink = `${domainDeeplink}${start}${nameFonyou}&${idFonyou}&${logoFonyou}&${requestId}&${typeFonyou}`;
          url = urlDeeplink;
        } else if (/iphone|ipad/i.test(userAgent)) {
          const start = "fl?";
          const nameFonyou = "appName=Claro";
          const idFonyou = "appId=202104086749";
          const logoFonyou =
            "logoURL=https://recargo.miclaro.com.gt/img/logo-claro.jpg";
          const urlDeeplink = `${domainDeeplink}${start}${nameFonyou}&${idFonyou}&${logoFonyou}&${requestId}&${typeFonyou}`;
          url = urlDeeplink;
        }
       // await new Promise((resolve) => setTimeout(resolve, 5000));
        window.open(url, "_blank");
      }
    } catch (error) {
      console.error("Error en la solicitud HTTP:", error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={payWithNewCuentaBi}>Pagar 11</button>
      </header>
    </div>
  );
}

export default App;
