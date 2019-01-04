import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';

const App = () => {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route path="/login" exact component={Login} />
            <Footer/>
          </div>
        </BrowserRouter>
    )
}

export default App;
