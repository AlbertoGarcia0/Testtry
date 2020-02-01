import React from 'react';

import Accordion from 'react-bootstrap/Accordion'
import {ToastProvider} from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/App.css';

import Header from './Header'
import Footer from './Footer'

document.body.style = 'background: #e0e0e0;';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
