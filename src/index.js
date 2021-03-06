import React from 'react';
import ReactDOM from 'react-dom';
import { GithubProvider } from './context/context';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
// dev-aes8zalk.us.auth0.com
// heehbETDh7xNMyzEiGuigKQ0IROqxyQo

ReactDOM.render(
  <Auth0Provider
  domain="dev-aes8zalk.us.auth0.com"
    clientId="heehbETDh7xNMyzEiGuigKQ0IROqxyQo"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
  <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>,
  document.getElementById('root')
);
