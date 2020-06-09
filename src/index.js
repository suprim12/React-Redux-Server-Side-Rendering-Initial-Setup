import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
import 'react-toastify/dist/ReactToastify.css';
import './scss/main.scss';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>, rootElement);
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>, rootElement);
}

serviceWorker.unregister();
