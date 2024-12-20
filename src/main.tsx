import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Rainbow Kit
import "./polyfills";

import { createWalletConnectModal } from "./configs/walletConnect";

// Telegram Mini App SDK
import WebApp from "@twa-dev/sdk";

// App + Styles
import App from "./App";
import "./index.css";
import "./configs/i18n";

// Hide the main button
WebApp.MainButton.hide();
// Expand the Telegram Mini App to full screen
WebApp.expand();
// Initialize the Telegram Mini App SDK
WebApp.ready();
// Enable the closing confirmation
WebApp.enableClosingConfirmation();

// Create the WalletConnect modal
createWalletConnectModal();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
