import React from 'react';

import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import StudentApp from './Register/StudentApp';
import AlbumComponent from './AlbumComponent';

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
