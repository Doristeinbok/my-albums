import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Errors from './Errors';

function LoginComponent() {

  const [student, setStudent] = useState({
    email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
    password:   {value:'', required: true, errors: []},
  }); 


  const onInputChange = (e) => {
    const newErrors = [];
    if(student[e.target.name].required){
      if(!e.target.value){
          newErrors.push(`${e.target.name} is required`);
      }
    }

    setStudent({
      ...student,
      [e.target.name]: {
          ...student[e.target.name],
          value: e.target.value,
          errors: newErrors
      }
  });

  console.log(student.errors);

  }


  return (
    <div className="row my-5">
      <div className="col"></div>
      <div className="col-sm-8">
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Sign in</p>
          <div className="row">
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" 
                name="email"
                defaultValue={student.email.value}
                onBlur={onInputChange}
            />
            {
            <Errors errors={student.email.errors} />
            }
          </div>

          <div className="row">
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" 
              name="password"
              defaultValue={student.password.value}
              onBlur={onInputChange}
            />
            {
                <Errors errors={student.password.errors} />
            }
          </div>
          
          <div className="row">
            <div className="d-flex justify-content-around">
                <div>
                    <div className="custom-control custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                        <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                    </div>
                </div>
                <div>
                    <a href="">Forgot password?</a>
                </div>
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

