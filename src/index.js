import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}><App /></Provider>, rootElement);
} else {
  render(<Provider store={store}><App /></Provider>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
