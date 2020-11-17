import React from 'react';

function RegisterComponent() {
    return(
        <div className="main">
          <form>
            <div className="row my-5"></div>
            <h1 className="row my-5">JOIN US!</h1>
            <h3 className="row my-5">Please fill in your information to register</h3>
            <div className="form-group row">
              <label for="firstName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="firstName" />
              </div>
            </div>
            <div className="form-group row">
              <label for="lastName" className="col-sm-2 col-form-label">Last Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" for="gridCheck1">
                    Recieve weekly updates
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 text-center mt-5">
                <button type="submit" className="btn btn-primary">Sign me in!</button>
              </div>
            </div>
          </form>
        </div>
    )
}

export default RegisterComponent;