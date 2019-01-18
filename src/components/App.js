import '../App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './AlwaysShow/ScrollToTop';

import Navbar from './AlwaysShow/Navbar';
import Footer from './AlwaysShow/Footer';
import LandingPage from './LandingPage';
import ProfileInput from './User/ProfileInput';
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
import Privacy from './Help/Privacy';
import Terms from './Help/Terms';
import axios from 'axios';

class App extends Component {
  isLoggedIn = async () => {
    return await axios.post("/api/loggedIn");
  };

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <Navbar isLoggedIn={this.isLoggedIn}/>
            <Switch>
              <Route path="/" exact component={LandingPage} />

              <Route path="/gallery" exact component={GalleryList} />
              <Route path="/gallery/family" exact component={Family} />
              <Route path="/gallery/wedding" exact component={Wedding} />
              <Route path="/gallery/landscape" exact component={Landscape} />
              <Route path="/gallery/aerial" exact component={Aerial} />
              <Route path="/gallery/pet" exact component={Pet} />

              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/calendar" exact render={(props) => <ClassCalendar {...props} isLoggedIn={this.isLoggedIn}/>}/>
              <Route path="/blog" exact render={(props) => <Blog {...props} isLoggedIn={this.isLoggedIn}/>}/>

              <Route path="/store/calendar" exact component={StoreCalendar} />
              <Route path="/store/card" exact component={StoreCard} />
              <Route path="/store/frame" exact component={StoreFrame} />
              <Route path="/store/poster" exact component={StorePoster} />

              <Route path="/contact" exact component={Contact} />
              <Route path="/privacy" exact component={Privacy} />
              <Route path="/terms" exact component={Terms} />
              <Route path="/instructor-info" exact component={InstructorInfo} />
              <Route path="/store" exact component={StoreList} />
              <Route path="/class" exact component={ClassList} />
              <Route path="/profile-input" exact component={ProfileInput} />
              <Route path="/profile" exact render={(props) => <Profile {...props} isLoggedIn={this.isLoggedIn}/>}/>
              <Route path="/forgot-username" exact component={ForgotUsername} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
