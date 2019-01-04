import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';

const App = () => {
    return <div className="ui inverted vertical center aligned segment" style={{minHeight: '500px', padding: '1em 0em'}}>
        <BrowserRouter>
          <div>
            <Navbar path="/" exact />
            <Route path="/login" exact component={Login} />
            {/* <Footer path="/" exact /> */}
          </div>
        </BrowserRouter>
      </div>
}

export default App;
