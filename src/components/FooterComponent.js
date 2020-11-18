import React from 'react';
import {Link} from 'react-router-dom';

import './footer.css'

function FooterComponent() {

    return (
      <>
        <hr/>
        <div className="row mt-5">
          <div className="col mb-4 text-center">
              <Link to="/register" className="btn btn-primary">Sign up, it's free!</Link>
          </div>
          <div className="col">
              © 2020 Copyright: <a href="mailto:Dori.steinbok@gmail.com"> Dori.steinbok@gmail.com </a>
          </div>
        </div> 
      </>

    )}

export default FooterComponent;

