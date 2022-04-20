import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Url from "./url";
import reportWebVitals from "./reportWebVitals";

import { ApolloProvider } from "@apollo/client";
import Peliculas from "./client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={Peliculas}>
      <Url />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
