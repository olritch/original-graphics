import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ScrollToTop from './AlwaysShow/ScrollToTop';

import Navbar from './AlwaysShow/Navbar';
import Footer from './AlwaysShow/Footer';
import LandingPage from './LandingPage';
import Profile from './User/Profile';
import ForgotUsername from './User/ForgotUsername';
import ForgotPassword from './User/ForgotPassword';

import GalleryList from './Gallery/GalleryList';
import Aerial from './Gallery/Aerial';
import Family from './Gallery/Family';
import Landscape from './Gallery/Landscape';
import Pet from './Gallery/Pet';
import Wedding from './Gallery/Wedding';

import AboutUs from './CompanyInfo/AboutUs';
import Blog from './CompanyInfo/Blog';
import ClassCalendar from './Classes/ClassCalendar';
import ClassList from './Classes/ClassList';
import InstructorInfo from './Classes/InstructorInfo';

import StoreList from './Store/StoreList';
import StoreCalendar from './Store/StoreCalendar';
import StoreCard from './Store/StoreCard';
import StoreFrame from './Store/StoreFrame';
import StorePoster from './Store/StorePoster';

import Contact from './Help/Contact';
import Help from './Help/Help';
import Privacy from './Help/Privacy';
import Terms from './Help/Terms';
import Sitemap from './Help/Sitemap';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <ScrollToTop>
          <div>
            <Navbar/>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/gallery' exact component={GalleryList}/>
            <Route path='/gallery/family' exact component={Family}/>
            <Route path='/gallery/wedding' exact component={Wedding}/>
            <Route path='/gallery/landscape' exact component={Landscape}/>
            <Route path='/gallery/aerial' exact component={Aerial}/>
            <Route path='/gallery/pet' exact component={Pet}/>
            <Route path='/about-us' exact component={AboutUs}/>
            <Route path='/calendar' exact component={ClassCalendar}/>
            <Route path='/blog' exact component={Blog}/>
            <Route path='/store/calendar' exact component={StoreCalendar}/>
            <Route path='/store/card' exact component={StoreCard}/>
            <Route path='/store/frame' exact component={StoreFrame}/>
            <Route path='/store/poster' exact component={StorePoster}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/help' exact component={Help}/>
            <Route path='/privacy' exact component={Privacy}/>
            <Route path='/terms' exact component={Terms}/>
            <Route path='/sitemap' exact component={Sitemap}/>
            <Route path='/instructor-info' exact component={InstructorInfo}/>
            <Route path='/store' exact component={StoreList}/>
            <Route path='/class' exact component={ClassList}/>
            <Route path='/profile' exact component={Profile}/>
            <Route path='/forgot-username' exact component={ForgotUsername}/>
            <Route path='/forgot-password' exact component={ForgotPassword}/>
            <Footer/>
          </div>
          </ScrollToTop>
        </BrowserRouter>
    )
  }
}

export default App;
