import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";

import { store, persistor } from "./redux/store";
import App from "./App";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
