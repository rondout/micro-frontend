/*
 * @Author: shufei.han
 * @Date: 2024-08-02 09:29:40
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 10:09:29
 * @FilePath: \micro-frontend\child-react-app\src\main.tsx
 * @Description: 
 */
// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>,
);
