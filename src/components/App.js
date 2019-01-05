import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './LandingPage';
// import SignUp from './SignUp';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route path='/' exact component={LandingPage}/>
            <Footer/>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
