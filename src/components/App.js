import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';

class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Footer />
                <Login />
            </div>
        )
    }
}
  
export default App;

