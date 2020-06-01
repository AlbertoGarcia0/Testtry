import React from 'react';

import {ToastProvider} from 'react-toast-notifications';
import { HashRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/App.css';

import Header from './Header'
import Footer from './Footer'
import getFB from './Firebase/FirebaseApp'

document.body.style = 'background: #e0e0e0;';

const firebase_app = getFB()

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header firebase_auth={firebase_app.auth()}/>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
