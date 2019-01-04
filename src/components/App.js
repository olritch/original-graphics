import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import SignUp from './SignUp';

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
