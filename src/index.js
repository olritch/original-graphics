import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// const routing = (
//     <Router>
//         <div>
//             <Route path='/' component={App} />
//             <Route path='/' component={}/>
//             <Route path='/' component={}/>
//             <Route path='/' component={}/>
//         </div>
//     </Router>
// )

ReactDOM.render(<App />, document.querySelector('#root'));