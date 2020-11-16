import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeComponent from './homeComponent/HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoginComponent from './registerComponent/LoginComponent';
import RegisterComponent from './registerComponent/LoginComponent';
import StudentApp from './registerComponent/LoginComponent';
import PersonalPageComponent from './personalPageComponent/PersonalPageComponent';
import AlbumComponent from './AlbumComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <HeaderComponent />
        <Switch>
          <Route path="/personal">
            <PersonalPageComponent />
          </Route>
          <Route path="/album" >
            <AlbumComponent />
          </Route>
          <Route path="/" >
            <HomeComponent />
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
