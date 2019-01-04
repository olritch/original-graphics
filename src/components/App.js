import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
            <Footer/>
          </div>
        </BrowserRouter>
    )
}

export default App;
