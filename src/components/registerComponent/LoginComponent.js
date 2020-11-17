import React from 'react';
import {Link} from 'react-router-dom';

function LoginComponent() {

  return (
    <div className="row my-5">
      <div className="col"></div>
      <div className="col-sm-8">
        <form className="text-center border border-light p-5" action="#!">
            <p className="h4 mb-4">Sign in</p>
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
            <div className="d-flex justify-content-around">
                <div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                        <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                    </div>
                </div>
                <div>
                    <a href="">Forgot password?</a>
                </div>
            </div>
            <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
            <p>Not a member?
                <Link to="/register">Register</Link>
            </p>
            <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
        </form>
      </div>
      <div className="col"></div>
    </div>

  )
}

export default LoginComponent;

