import React from 'react';

import HomeComponent from './homeComponent/HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoginComponent from './registerComponent/LoginComponent';
import RegisterComponent from './registerComponent/LoginComponent';
import StudentApp from './registerComponent/LoginComponent';
import PersonalPageComponent from './personalPageComponent/PersonalPageComponent';

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </div>
  )
}

export default App;
